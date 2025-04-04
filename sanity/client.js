import { createClient } from '@sanity/client';

// Pull from environment variables or fallback
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '73x7ss88';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN
const client = createClient({
    projectId,
    dataset,
    apiVersion: '2021-10-21',
    token,
    useCdn: false,
});

export { client };
