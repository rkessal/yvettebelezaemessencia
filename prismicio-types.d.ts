// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for footer documents
 */
interface FooterDocumentData {
  /**
   * address field in *footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField;

  /**
   * number field in *footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  number: prismic.RichTextField;

  /**
   * copyrights field in *footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyrights
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  copyrights: prismic.RichTextField;

  /**
   * image field in *footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * logo field in *footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Item in *home → Categories*
 */
export interface HomeDocumentDataCategoriesItem {
  /**
   * Service field in *home → Categories*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: home.categories[].service
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  service: prismic.ContentRelationshipField<"service_category">;
}

type HomeDocumentDataSlicesSlice =
  | PerguntasSlice
  | SobreNosSlice
  | SectionSlice
  | ServiceSlice
  | WelcomeSlice
  | HeroSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Categories field in *home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.categories[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  categories: prismic.GroupField<Simplify<HomeDocumentDataCategoriesItem>>;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type NavigationDocumentDataSlicesSlice = LinkSlice;

/**
 * Content for navigation documents
 */
interface NavigationDocumentData {
  /**
   * Slice Zone field in *navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ServiceCategoryDocumentDataSlicesSlice = ServiceSlice;

/**
 * Content for Service Category documents
 */
interface ServiceCategoryDocumentData {
  /**
   * Title field in *Service Category*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_category.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Service Category*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_category.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Service Category*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: service_category.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Service Category*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: service_category.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ServiceCategoryDocumentDataSlicesSlice>;
}

/**
 * Service Category document from Prismic
 *
 * - **API ID**: `service_category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServiceCategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ServiceCategoryDocumentData>,
    "service_category",
    Lang
  >;

/**
 * Content for whatsapp documents
 */
interface WhatsappDocumentData {
  /**
   * number field in *whatsapp*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: whatsapp.number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField;

  /**
   * image field in *whatsapp*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: whatsapp.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * text field in *whatsapp*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: whatsapp.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * whatsapp document from Prismic
 *
 * - **API ID**: `whatsapp`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WhatsappDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<WhatsappDocumentData>,
    "whatsapp",
    Lang
  >;

export type AllDocumentTypes =
  | FooterDocument
  | HomeDocument
  | NavigationDocument
  | PageDocument
  | ServiceCategoryDocument
  | WhatsappDocument;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * background image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * logo field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Link → Primary*
 */
export interface LinkSliceDefaultPrimary {
  /**
   * url field in *Link → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link.primary.url
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  url: prismic.KeyTextField;

  /**
   * label field in *Link → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: link.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for Link Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LinkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Link*
 */
type LinkSliceVariation = LinkSliceDefault;

/**
 * Link Shared Slice
 *
 * - **API ID**: `link`
 * - **Description**: Link
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LinkSlice = prismic.SharedSlice<"link", LinkSliceVariation>;

/**
 * Primary content in *Perguntas → Primary*
 */
export interface PerguntasSliceDefaultPrimary {
  /**
   * Title field in *Perguntas → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: perguntas.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *Perguntas → Items*
 */
export interface PerguntasSliceDefaultItem {
  /**
   * question field in *Perguntas → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: perguntas.items[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField;

  /**
   * answer field in *Perguntas → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: perguntas.items[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Default variation for Perguntas Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PerguntasSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PerguntasSliceDefaultPrimary>,
  Simplify<PerguntasSliceDefaultItem>
>;

/**
 * Slice variation for *Perguntas*
 */
type PerguntasSliceVariation = PerguntasSliceDefault;

/**
 * Perguntas Shared Slice
 *
 * - **API ID**: `perguntas`
 * - **Description**: Perguntas
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PerguntasSlice = prismic.SharedSlice<
  "perguntas",
  PerguntasSliceVariation
>;

/**
 * Primary content in *Section → Primary*
 */
export interface SectionSliceDefaultPrimary {
  /**
   * title field in *Section → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Section → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Section → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Section Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Section*
 */
type SectionSliceVariation = SectionSliceDefault;

/**
 * Section Shared Slice
 *
 * - **API ID**: `section`
 * - **Description**: Section
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionSlice = prismic.SharedSlice<
  "section",
  SectionSliceVariation
>;

/**
 * Primary content in *Service → Primary*
 */
export interface ServiceSliceDefaultPrimary {
  /**
   * Title field in *Service → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Service → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *Service → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: service.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Category field in *Service → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: service.primary.category
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField;
}

/**
 * Default variation for Service Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServiceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Service*
 */
type ServiceSliceVariation = ServiceSliceDefault;

/**
 * Service Shared Slice
 *
 * - **API ID**: `service`
 * - **Description**: Service
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServiceSlice = prismic.SharedSlice<
  "service",
  ServiceSliceVariation
>;

/**
 * Primary content in *SobreNos → Primary*
 */
export interface SobreNosSliceDefaultPrimary {
  /**
   * Image field in *SobreNos → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_nos.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *SobreNos → Items*
 */
export interface SobreNosSliceDefaultItem {
  /**
   * Title field in *SobreNos → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_nos.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *SobreNos → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_nos.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for SobreNos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SobreNosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SobreNosSliceDefaultPrimary>,
  Simplify<SobreNosSliceDefaultItem>
>;

/**
 * Slice variation for *SobreNos*
 */
type SobreNosSliceVariation = SobreNosSliceDefault;

/**
 * SobreNos Shared Slice
 *
 * - **API ID**: `sobre_nos`
 * - **Description**: SobreNos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SobreNosSlice = prismic.SharedSlice<
  "sobre_nos",
  SobreNosSliceVariation
>;

/**
 * Primary content in *Welcome → Primary*
 */
export interface WelcomeSliceDefaultPrimary {
  /**
   * title field in *Welcome → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Welcome → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Welcome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelcomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WelcomeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Welcome*
 */
type WelcomeSliceVariation = WelcomeSliceDefault;

/**
 * Welcome Shared Slice
 *
 * - **API ID**: `welcome`
 * - **Description**: Welcome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelcomeSlice = prismic.SharedSlice<
  "welcome",
  WelcomeSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataCategoriesItem,
      HomeDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ServiceCategoryDocument,
      ServiceCategoryDocumentData,
      ServiceCategoryDocumentDataSlicesSlice,
      WhatsappDocument,
      WhatsappDocumentData,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      LinkSlice,
      LinkSliceDefaultPrimary,
      LinkSliceVariation,
      LinkSliceDefault,
      PerguntasSlice,
      PerguntasSliceDefaultPrimary,
      PerguntasSliceDefaultItem,
      PerguntasSliceVariation,
      PerguntasSliceDefault,
      SectionSlice,
      SectionSliceDefaultPrimary,
      SectionSliceVariation,
      SectionSliceDefault,
      ServiceSlice,
      ServiceSliceDefaultPrimary,
      ServiceSliceVariation,
      ServiceSliceDefault,
      SobreNosSlice,
      SobreNosSliceDefaultPrimary,
      SobreNosSliceDefaultItem,
      SobreNosSliceVariation,
      SobreNosSliceDefault,
      WelcomeSlice,
      WelcomeSliceDefaultPrimary,
      WelcomeSliceVariation,
      WelcomeSliceDefault,
    };
  }
}
