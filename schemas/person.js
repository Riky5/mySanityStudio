export default {
  title: "Person",
  name: "person",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Role",
      name: "role",
      type: "string"
    },
    {
      title: "Avatar",
      name: "avatar",
      type: "image",
    },
    {
      title: "About / Paragraphs",
      name: "about",
      type: "array",
      of: [{type: "string"}]
    },
    {
      title: "Tech",
      name: "tech",
      type: "array",
      of: [{type: "tech"}]
    },
    {
      title: "Education & Gurus",
      name: "educationAndGurus",
      type: "array",
      of: [{type: "education"}]
    },
    {
      title: "Projects",
      name: "projects",
      type: "array",
      of: [{type: "project"}]
    },
    {
      title: "Contacts",
      name: "contacts",
      type: "array",
      of: [{type: "contact"}]
    },
  ]
 }