import list from "../objects/list";
import brands from "../objects/brands";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fieldsets: [
    {
      name: "hero",
      title: "Hero"
    },
    {
      name: "about",
      title: "About"
    },
    {
      name: "brands",
      title: "Brands"
    }
  ],
  fields: [
    {
      name: "heroTitle",
      title: "Title",
      type: "string",
      fieldset: "hero"
    },
    {
      name: "heroBody",
      title: "Body",
      type: "blockText",
      fieldset: "hero"
    },
    {
      name: "heroImage",
      title: "Image",
      type: "figure",
      fieldset: "hero"
    },
    {
      name: "aboutTitle",
      title: "Title",
      type: "string",
      fieldset: "about"
    },
    {
      name: "aboutBody",
      title: "Body",
      type: "blockText",
      fieldset: "about"
    },
    {
      name: "aboutImage",
      title: "Image",
      type: "figure",
      fieldset: "about"
    },
    {
      name: "aboutList",
      title: "List",
      type: "array",
      fieldset: "about",
      of: [{ ...list }]
    },
    {
      name: "brandsTitle",
      title: "Title",
      type: "string",
      fieldset: "brands"
    },
    {
      name: "brandsList",
      title: "Brands",
      type: "array",
      fieldset: "brands",
      of: [{ ...brands }]
    }
  ],
  initialValue: {
    heroTitle: "“Auctioning is the way to buy and sell for the future”",
    heroBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, itaque.",
    aboutTitle: "About",
    brandsTitle: "Brands of"
  }
};
