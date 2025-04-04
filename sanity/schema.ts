import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import homepage from './schemaTypes/homepage'
import slide from './schemaTypes/slide'
import navigation from './schemaTypes/navigation'
import projectPage from './schemaTypes/projectPage'
import slugObject from './schemaTypes/slugObject'
import principle from './schemaTypes/principle'
import service from './schemaTypes/service'
import imageObject from './schemaTypes/imageObject'
import homepageWhyChooseUs from './schemaTypes/homepageWhyChooseUs'
import client from './schemaTypes/client'
import homeCTASection from './schemaTypes/homeCTASection'
import homepageTestimonial from './schemaTypes/homepageTestimonial'
import project from './schemaTypes/project'
import blogPost from './schemaTypes/blogPost'
import blogSection from './schemaTypes/blogSection'
import servicesPage from './schemaTypes/servicesPage'
import blogPage from './schemaTypes/blogPage'
import seo from './schemaTypes/seo'
import siteSettings from './schemaTypes/siteSettings'
import footer from './schemaTypes/footer'
import mediaBlock from './schemaTypes/mediaBlock'
import calidadPage from './schemaTypes/calidadPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, blockContent, homepage, slide, navigation, projectPage, slugObject, principle, service, imageObject,
    homepageWhyChooseUs, client, homeCTASection, homepageTestimonial, project, blogPost, blogSection, servicesPage,
    blogPage, seo, footer, siteSettings, mediaBlock, calidadPage

  ],
}
