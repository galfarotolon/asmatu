// /sanity/schemaTypes/mediaBlock.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "mediaBlock",
  title: "Bloque de Medios",
  type: "object",
  fields: [
    defineField({
      name: "mediaType",
      title: "Tipo de Medio",
      type: "string",
      options: {
        list: [
          { title: "Imagen", value: "image" },
          { title: "Video", value: "video" }
        ],
        layout: "dropdown"
      },
      initialValue: "image",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "altText",
      title: "Texto Alternativo",
      type: "string",
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "videoFile",
      title: "Archivo de Video",
      type: "file",
      options: { accept: "video/*" },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "object",
      fields: [
        { name: "es", title: "Descripción (Español)", type: "string" },
        { name: "eu", title: "Deskribapena (Euskera)", type: "string" },
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
  preview: {
    select: {
      mediaType: "mediaType",
      title: "description.es",
      media: "image"
    },
    prepare(selection) {
      const { mediaType, title, media } = selection;
      return {
        title: mediaType === "image" ? "Imagen: " + (title || "") : "Video: " + (title || ""),
        media: media,
      };
    }
  }
});
