const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '73x7ss88';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = 'skH1zNvEKR7suJ6eQsCvnhsX9LRauiurC86BTtuKAWjKhExhq3uC61BWugGLcvBpfVNKuNVtt5TsVyKXg0RhvOS62TYuTJXT33qu67DiuKdTs0gtvwL2CDeaEOtOswFW2Y4kpOKKdEHvsjVqK1XayrV48JdYbkXSrkRV6XUDqfQzDwkwZok1';

// ----------------------------
// Configure Sanity client with an API version
// ----------------------------
const client = createClient({
    projectId,
    dataset,
    apiVersion: '2021-10-21',
    token,
    useCdn: false,
});

// ----------------------------
// Helper: Generate a stable, valid document ID from a slug
// ----------------------------
function generateIdFromSlug(slug) {
    // Truncate the slug to 50 characters (adjust length as needed)
    const safeSlug = slug.substring(0, 50).toLowerCase();
    return `project-${safeSlug}`;
}

// ----------------------------
// Helper: Convert plain text to a minimal blockContent array
// ----------------------------
function toBlockContent(text) {
    if (!text) return [];
    return [
        {
            _key: Math.random().toString(36).substring(2, 15),
            _type: "block",
            children: [
                {
                    _key: Math.random().toString(36).substring(2, 15),
                    _type: "span",
                    marks: [],
                    text: text
                }
            ],
            markDefs: [],
            style: "normal"
        }
    ];
}

// ----------------------------
// Helper: Strip HTML tags from a string and clean up whitespace
// ----------------------------
function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// ----------------------------
// Helper: Build image mapping from Sanity assets (originalFilename -> asset _id)
// ----------------------------
async function buildImageMapping() {
    try {
        const assets = await client.fetch(
            '*[_type == "sanity.imageAsset"]{ _id, originalFilename }'
        );
        const mapping = {};
        assets.forEach(asset => {
            if (asset.originalFilename) {
                mapping[asset.originalFilename] = asset._id;
            }
        });
        console.log('Built image mapping for', Object.keys(mapping).length, 'assets.');
        return mapping;
    } catch (error) {
        console.error('Error building image mapping:', error.message);
        return {};
    }
}

// ----------------------------
// Helper: Build dynamic category mapping from Sanity
// Maps category slug (e.g., "ingenieria-civil") to its document _id
// ----------------------------
async function buildCategoryIdMapping() {
    try {
        const categories = await client.fetch('*[_type=="category"]{ _id, slug }');
        const mapping = {};
        categories.forEach(cat => {
            if (cat.slug && cat.slug.current) {
                mapping[cat.slug.current.toLowerCase()] = cat._id;
            }
        });
        console.log('Built category mapping for', Object.keys(mapping).length, 'categories.');
        return mapping;
    } catch (error) {
        console.error('Error building category mapping:', error.message);
        return {};
    }
}

// ----------------------------
// Helper: Scrape project links from a listing page
// ----------------------------
async function scrapeProjectLinks(listingUrl) {
    const { data } = await axios.get(listingUrl);
    const $ = cheerio.load(data);
    const links = [];
    $('.tercio-nuevo').each((i, el) => {
        const link = $(el).find('h5 a').attr('href');
        if (link) {
            links.push(link.trim());
        }
    });
    return links;
}

// ----------------------------
// Helper: Scrape details from an individual project page
// ----------------------------
async function scrapeProjectDetail(url) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const infoEl = $('.info-proyecto .texto-info-proyecto');
    const title = infoEl.find('h2 strong').first().text().trim() || '';
    let location = '';
    let description = '';
    let amount = '';

    infoEl.children().each((i, el) => {
        const tag = $(el).get(0).tagName;
        if (tag === 'h3') {
            const headerText = $(el).text().trim().toLowerCase();
            const nextP = $(el).next('p');
            if (headerText.includes('ubicación')) {
                location = nextP.text().trim();
            } else if (headerText.includes('descripción')) {
                description = nextP.html() ? nextP.html().trim() : nextP.text().trim();
            } else if (headerText.includes('monto')) {
                amount = nextP.text().trim();
            }
        }
    });

    let imgUrl = $('img.wp-post-image').first().attr('src') || '';
    if (!imgUrl) {
        imgUrl = $('img').first().attr('src') || '';
    }
    const slugMatch = url.match(/\/proyecto\/([^\/]+)/);
    const slug = slugMatch ? slugMatch[1] : '';
    return { title, location, description, amount, imageUrl: imgUrl, slug, url };
}

// ----------------------------
// Helper: Scrape a category page and build mapping from project slug to category info
// ----------------------------
async function scrapeCategoryPage(categoryPageUrl, categorySlug, nameEs, nameEu) {
    const { data } = await axios.get(categoryPageUrl);
    const $ = cheerio.load(data);
    const projectSlugs = [];
    $('.tercio-nuevo').each((i, el) => {
        const link = $(el).find('h5 a').attr('href');
        if (link) {
            const match = link.match(/\/proyecto\/([^\/]+)/);
            if (match && match[1]) {
                projectSlugs.push(match[1].trim());
            }
        }
    });
    const mapping = {};
    projectSlugs.forEach(slug => {
        mapping[slug.toLowerCase()] = {
            slug: categorySlug,
            name: { es: nameEs, eu: nameEu },
        };
    });
    return mapping;
}

// ----------------------------
// Scrape projects for one language
// ----------------------------
async function scrapeProjectsForLanguage(lang) {
    const listingUrl = lang === 'es'
        ? 'https://www.asmatu.es/proyectos/'
        : 'https://www.asmatu.es/eu/proiektuak/';
    const links = await scrapeProjectLinks(listingUrl);
    console.log(`[${lang}] Found ${links.length} project links.`);
    const projects = [];
    for (const link of links) {
        try {
            const detail = await scrapeProjectDetail(link);
            projects.push({
                slug: detail.slug,
                title: { [lang]: detail.title || '' },
                location: { [lang]: detail.location || '' },
                description: { [lang]: detail.description || '' },
                amount: { [lang]: detail.amount || '' },
                imageUrl: detail.imageUrl || '',
                url: detail.url,
            });
            console.log(`[${lang}] Scraped: ${detail.title}`);
        } catch (error) {
            console.error(`[${lang}] Error scraping ${link}: ${error.message}`);
        }
    }
    return projects;
}

// ----------------------------
// Main Function: Merge projects, attach category info, map images, set stable IDs & SEO, and output NDJSON
// ----------------------------
async function main() {
    // Build image mapping from Sanity: filename -> asset ID
    const imageMapping = await buildImageMapping();

    // Build dynamic category mapping from Sanity: category slug -> actual document _id
    const catIdMapping = await buildCategoryIdMapping();

    // Scrape Spanish and Basque projects
    const projectsEs = await scrapeProjectsForLanguage('es');
    const projectsEu = await scrapeProjectsForLanguage('eu');

    if (projectsEs.length !== projectsEu.length) {
        console.warn('Warning: The number of projects in ES and EU do not match.');
    }

    // Merge projects by index, with fallback to Spanish if EU fields are missing
    const mergedProjects = [];
    const maxLength = Math.max(projectsEs.length, projectsEu.length);
    for (let i = 0; i < maxLength; i++) {
        const projEs = projectsEs[i] || {};
        const projEu = projectsEu[i] || {};
        mergedProjects.push({
            slug: projEs.slug || projEu.slug || '',
            title: {
                es: projEs.title ? projEs.title.es : '',
                eu: (projEu.title && projEu.title.eu) ? projEu.title.eu : (projEs.title ? projEs.title.es : '')
            },
            location: {
                es: projEs.location ? projEs.location.es : '',
                eu: (projEu.location && projEu.location.eu) ? projEu.location.eu : (projEs.location ? projEs.location.es : '')
            },
            description: {
                es: projEs.description ? projEs.description.es : '',
                eu: (projEu.description && projEu.description.eu) ? projEu.description.eu : (projEs.description ? projEs.description.es : '')
            },
            // "amount" is scraped; we now use it as "value"
            amount: {
                es: projEs.amount ? projEs.amount.es : '',
                eu: (projEu.amount && projEu.amount.eu) ? projEu.amount.eu : (projEs.amount ? projEs.amount.es : '')
            },
            imageUrl: projEs.imageUrl || projEu.imageUrl || '',
            url: projEs.url || projEu.url || ''
        });
    }
    console.log(`Merged projects count: ${mergedProjects.length}`);

    // Scrape category pages to build a mapping from scraped project slugs to category info
    const categories = [
        {
            slug: 'ingenieria-civil',
            url: 'https://www.asmatu.es/cat_proyecto/ingenieria-civil',
            nameEs: 'Ingeniería Civil',
            nameEu: 'Ingeniería Civil'
        },
        {
            slug: 'urbanismo',
            url: 'https://www.asmatu.es/cat_proyecto/urbanismo',
            nameEs: 'Urbanismo',
            nameEu: 'Urbanismo'
        },
        {
            slug: 'edificacion',
            url: 'https://www.asmatu.es/cat_proyecto/edificacion',
            nameEs: 'Edificación',
            nameEu: 'Eraikuntza'
        },
        {
            slug: 'medio-ambiente',
            url: 'https://www.asmatu.es/cat_proyecto/medio-ambiente',
            nameEs: 'Medio Ambiente',
            nameEu: 'Ingurumena'
        },
        {
            slug: 'otros',
            url: 'https://www.asmatu.es/cat_proyecto/otros',
            nameEs: 'Otros',
            nameEu: 'Besteak'
        }
    ];

    let categoryMapping = {};
    for (const cat of categories) {
        try {
            const catMap = await scrapeCategoryPage(cat.url, cat.slug, cat.nameEs, cat.nameEu);
            categoryMapping = { ...categoryMapping, ...catMap };
            console.log(`Scraped category "${cat.slug}" with ${Object.keys(catMap).length} projects.`);
        } catch (error) {
            console.error(`Error scraping category ${cat.slug}: ${error.message}`);
        }
    }

    // Attach category info to each merged project using the dynamic category mapping
    mergedProjects.forEach(proj => {
        const norm = proj.slug.toLowerCase();
        if (categoryMapping[norm]) {
            const scrapedCatSlug = categoryMapping[norm].slug.toLowerCase();
            if (catIdMapping[scrapedCatSlug]) {
                proj.categories = [{ _type: 'reference', _ref: catIdMapping[scrapedCatSlug] }];
                proj.categoryName = { es: categoryMapping[norm].name.es, eu: categoryMapping[norm].name.eu };
            } else {
                console.warn(`Category "${scrapedCatSlug}" not found in Sanity`);
                proj.categories = [];
                proj.categoryName = { es: '', eu: '' };
            }
        } else {
            proj.categories = [];
            proj.categoryName = { es: '', eu: '' };
        }
    });

    // Map the image from Sanity via the mapping.
    mergedProjects.forEach(proj => {
        if (proj.imageUrl) {
            const filename = proj.imageUrl.split('/').pop().split('?')[0];
            const assetId = imageMapping[filename];
            if (assetId) {
                proj.img = {
                    _type: 'image',
                    asset: { _type: 'reference', _ref: assetId }
                };
            } else {
                console.warn(`No asset mapping found for image: ${filename}`);
            }
        }
    });

    // Transform each merged project into a Sanity project document matching your schema
    const finalProjects = mergedProjects.map(proj => {
        const normalizedSlug = proj.slug.toLowerCase() || 'no-slug';
        return {
            _id: generateIdFromSlug(proj.slug),
            _type: 'project',
            title: proj.title,
            slug: {
                es: { _type: 'slug', current: proj.slug },
                eu: { _type: 'slug', current: proj.slug }
            },
            description: {
                es: toBlockContent(stripHtml(proj.description.es)),
                eu: toBlockContent(stripHtml(proj.description.eu))
            },
            // Rename amount to value
            value: proj.amount,
            location: proj.location,
            img: proj.img || undefined,
            categories: proj.categories,
            // Set SEO fields:
            seo: {
                metaTitle: {
                    es: proj.title.es,
                    eu: proj.title.eu
                },
                metaDescription: {
                    es: stripHtml(proj.description.es),
                    eu: stripHtml(proj.description.eu)
                },
                ogTitle: {
                    es: proj.title.es,
                    eu: proj.title.eu
                },
                ogDescription: {
                    es: stripHtml(proj.description.es),
                    eu: stripHtml(proj.description.eu)
                },
                ogImage: proj.img || null
            },
            // Leaving additional fields empty; update these later if needed:
            detailedInfo: { es: [], eu: [] },
            quote: { es: '', eu: '' },
            client: { es: '', eu: '' },
            architect: { es: '', eu: '' },
            completionDate: { es: '', eu: '' },
            squareFootage: { es: '', eu: '' },
            media: []
        };
    });

    // Write out the final projects as a JSON array to projects.json
    fs.writeFileSync('projects.json', JSON.stringify(finalProjects, null, 2));
    console.log(`Saved ${finalProjects.length} projects to projects.json`);

    // Convert the JSON array to NDJSON (one JSON document per line)
    const ndjson = finalProjects.map(doc => JSON.stringify(doc)).join('\n');
    fs.writeFileSync('projects.ndjson', ndjson);
    console.log(`Converted projects.json to projects.ndjson`);
}

main().catch(console.error);
