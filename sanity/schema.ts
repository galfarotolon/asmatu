import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import header from './schemaTypes/header'
import localeString from './schemaTypes/localeString'
import slider from './schemaTypes/slider'
import sliderItem from './schemaTypes/sliderItem'
import principle from './schemaTypes/principle'
import principles from './schemaTypes/principles'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, header, localeString, slider, sliderItem, principles, principle],
}
