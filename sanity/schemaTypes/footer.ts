// /sanity/schemaTypes/footer.ts
import { defineType, defineField } from "sanity";

// We'll assume there's only one footer doc, but if you want to allow multiple, omit the "singleton" approach
export default defineType({
  name: "footer",
  title: "Pie de página",
  type: "document",
  fields: [
    // Column 1: Parque Empresarial Zuatzu
    defineField({
      name: "column1",
      title: "Columna 1 (Parque Empresarial)",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título de la columna",
          type: "string",
          initialValue: "Parque Empresarial Zuatzu",
        },
        {
          name: "lines",
          title: "Líneas de texto",
          type: "array",
          of: [{ type: "string" }],
          // e.g. ["Francisco Grandmontagne nº 1", "Edificio Zurriola", ...]
        },
        {
          name: "linkLabel",
          title: "Texto del Link",
          type: "string",
          initialValue: "TRABAJA CON NOSOTROS",
        },
        {
          name: "linkHref",
          title: "URL del Link",
          type: "string",
          initialValue: "/empresa/#Trabaja-con-nosotros",
        },
      ],
    }),

    // Column 2: Horario de Oficina
    defineField({
      name: "column2",
      title: "Columna 2 (Horario de Oficina)",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título de la columna",
          type: "string",
          initialValue: "Horario de Oficina",
        },
        {
          name: "schedule",
          title: "Listado de horarios",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "day", type: "string", title: "Día", initialValue: "Lunes-Viernes" },
                { name: "hours", type: "string", title: "Horario", initialValue: "9am a 5pm" },
              ],
            },
          ],
        },
      ],
    }),

    // Column 3: Enlaces Útiles
    defineField({
      name: "column3",
      title: "Columna 3 (Enlaces Útiles)",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Título de la columna",
          type: "string",
          initialValue: "Enlaces Útiles",
        },
        {
          name: "links",
          title: "Lista de enlaces",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string", title: "Texto del enlace" },
                { name: "href", type: "string", title: "URL" },
              ],
            },
          ],
        },
      ],
    }),

    // Bottom nav links
    defineField({
      name: "bottomLinks",
      title: "Enlaces de Pie (Bottom)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Texto del enlace" },
            { name: "href", type: "string", title: "URL" },
          ],
        },
      ],
    }),

    // Copyright text
    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
      initialValue: "© 2024 Asmatu. Todos los derechos reservados.",
    }),
  ],
  preview: {
    select: {
      title: "column1.title",
    },
  },
});
