import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configuración del Sitio",
  type: "document",
  fields: [
    // This alone doesn't enforce a single doc. It's just a hidden marker.
    defineField({
      name: "singleton",
      title: "Singleton",
      type: "boolean",
      hidden: true,
      initialValue: true,
    }),

    // Basic info
    defineField({
      name: "companyName",
      title: "Nombre de la Empresa",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),

    // Contact
    defineField({
      name: "address",
      title: "Dirección (multiline)",
      type: "object",
      fields: [
        {
          name: "es",
          title: "Dirección (Español)",
          // Option A: store each line in an array
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "eu",
          title: "Helbidea (Euskera)",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),
    defineField({
      name: "phone",
      title: "Teléfono",
      type: "string",
    }),
    defineField({
      name: "fax",
      title: "Fax",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    // Working hours
    defineField({
      name: "workingHours",
      title: "Horario de Oficina",
      type: "object",
      fields: [
        {
          name: "weekdays",
          title: "Lunes-Viernes",
          type: "object",
          fields: [
            { name: "es", title: "Horario (ES)", type: "string" },
            { name: "eu", title: "Ordutegia (EU)", type: "string" },
          ],
        },
        {
          name: "saturday",
          title: "Sábado",
          type: "object",
          fields: [
            { name: "es", title: "Horario (ES)", type: "string" },
            { name: "eu", title: "Ordutegia (EU)", type: "string" },
          ],
        },
        {
          name: "sunday",
          title: "Domingo",
          type: "object",
          fields: [
            { name: "es", title: "Horario (ES)", type: "string" },
            { name: "eu", title: "Ordutegia (EU)", type: "string" },
          ],
        },
      ],
    }),

    // 404 text & button label
    defineField({
      name: "notFoundTitle",
      title: "404 Título",
      type: "object",
      fields: [
        { name: "es", title: "Título (Español)", type: "string", initialValue: "Página no encontrada" },
        { name: "eu", title: "Izenburua (Euskera)", type: "string", initialValue: "Orria ez da aurkitu" },
      ],
    }),
    defineField({
      name: "notFoundMessage",
      title: "404 Mensaje",
      type: "object",
      fields: [
        {
          name: "es",
          title: "Mensaje (Español)",
          type: "text",
          initialValue:
            "Lo sentimos, pero la página que busca fue movida, eliminada, renombrada o quizás nunca existió.",
        },
        {
          name: "eu",
          title: "Mezua (Euskera)",
          type: "text",
          initialValue:
            "Barkatu, baina bilatzen ari zaren orria mugitu egin da, ezabatu da, berrizendatu da edo agian ez da inoiz existitu.",
        },
      ],
    }),
    defineField({
      name: "notFoundButton",
      title: "404 Botón",
      type: "object",
      fields: [
        { name: "es", title: "Etiqueta (Español)", type: "string", initialValue: "Volver al Inicio" },
        { name: "eu", title: "Etiketa (Euskera)", type: "string", initialValue: "Hasierara itzuli" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "companyName",
      media: "logo",
    },
  },
});
