import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness, MdSettings, MdHome } from "react-icons/md";

const hiddenTypes = ["category", "companyInfo", "siteSettings", "homepage", "brands", "list"];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Company Info")
        .child(
          S.editor()
            .id("companyInfo")
            .schemaType("companyInfo")
            .documentId("companyInfo")
        )
        .icon(MdBusiness),
      S.listItem()
        .title("Homepage")
        .child(
          S.editor()
            .id("homepage")
            .title("Homepage")
            .schemaType("homepage")
            .documentId("homepage")
        )
        .icon(MdHome),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ]);
