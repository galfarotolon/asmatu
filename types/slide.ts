// /types/slide.ts

export interface Slide {
    mediaType: 'video' | 'image';
    videoFile?: {
      asset: {
        // ID, path, or other metadata as needed
        url: string;
      };
    };
    backgroundImage?: {
      asset: {
        url: string;
      };
    };
    title: {
      ESP: string;
      EU: string;
    };
    subtitle: {
      ESP: string;
      EU: string;
    };
    description: {
      ESP: string;
      EU: string;
    };
    link: {
      ESP: { current: string };
      EU: { current: string };
    };
  }
  