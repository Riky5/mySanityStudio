export default {
  // This is the display name for the type
  title: "Project",
      
  // The identifier for this document type used in the api's
  name: "project",

  type: "document",

  fields: [
    {
      // The display name for this field
      title: "Name",
      // The identifier for this field used in the api's
      name: "name",
       // The type of this field
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Tech Used",
      name: "techUsed",
      type: "array",
      of: [{type: "tech"}],
    },
    {
      title: "Github URL",
      name: "githubURL",
      type: "string",
    },
    {
      title: "Image Preview",
      name: "imagePreview",
      type: "image",
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{type: "person"}]
    }
   ]
 }