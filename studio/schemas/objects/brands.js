export default {
  title: "List item",
  name: "brands",
  type: "document",
  fieldsets: [{ name: "social", title: "Social" }],
  fields: [
    {
      title: "Image",
      name: "image",
      type: "figure"
    },
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Market",
      name: "market",
      type: "string"
    },
    {
      title: "Website",
      name: "website",
      type: "url"
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "string",
      fieldset: "social"
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
      fieldset: "social"
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
      fieldset: "social"
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
      fieldset: "social"
    }
  ],
  initialValue: {
    title: "Feature one",
    body: "Feature body"
  }
};
