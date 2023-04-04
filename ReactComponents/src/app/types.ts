export type InfoData = {
  title: string;
  isbn?: string;
  pageCount: number;
  publishedDate: { $date: string };
  thumbnailUrl?: string;
  shortDescription?: string;
  longDescription?: string;
  status: string;
  authors: string[];
  categories: string[];
};

// new book type
type VolumeInfo = {
  title: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers: {
    type: string;
    identifier?: string;
  }[];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount?: number;
  printType: string;
  categories: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
};
type SaleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: {
    amount: number;
    currencyCode: string;
  };
  retailPrice?: {
    amount: number;
    currencyCode: string;
  };
  buyLink?: string;
  offers?: {
    finskyOfferType: number;
    listPrice: {
      amountInMicros: number;
      currencyCode: string;
    };
    retailPrice: {
      amountInMicros: number;
      currencyCode: string;
    };
  }[];
};
type AccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
    acsTokenLink?: string;
  };
  pdf: {
    isAvailable: boolean;
  };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
};

export type GoogleBook = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: {
    textSnippet: string;
  };
};
