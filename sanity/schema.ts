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

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, homepage, slide, navigation, projectPage, slugObject],
}
