import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { client } from './client';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export const urlForImage = (source: Image) => {
  if (!source || !source.asset || !source.asset._ref) {
    return '';
  }
  return builder.image(source).auto('format').fit('max').url();
};
