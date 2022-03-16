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
       title: "About",
       name: "about",
       type: "string",
     },
     {
       title: "Tech",
       name: "tech",
       type: "array",
       of: [{type: "string"}]
     }
   ]
 }