export default {
  // This is the display name for the type
  title: "Project",
      
  // The identifier for this document type used in the api's
  name: "project",

  type: "document",

   // Now we proceed to list the fields of our document
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
       // The display name for this field
       title: "Description",
       // The identifier for this field used in the api's
       name: "description",
       // The type of this field
       type: "string",
     },
     {
       // The display name for this field
       title: "Github URL",
       // The identifier for this field used in the api's
       name: "githubURL",
       // The type of this field
       type: "string",
     }
   ]
 }