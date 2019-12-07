export default {
  title: "List item",
  name: "list",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "figure"
    },
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Body",
      name: "body",
      type: "blockText"
    }
  ],
  initialValue: {
    title: "Feature one",
    body: "Feature body"
  }
};
