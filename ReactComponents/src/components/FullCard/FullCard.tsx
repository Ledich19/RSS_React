import React, { useState } from 'react';
import s from './FullCard.module.scss';

const FullCard = () => {
  const [book, setBook] = useState({
    kind: 'books#volume',
    id: 'hjq7oyeoATwC',
    etag: 'mDKgZVxOMiI',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/hjq7oyeoATwC',
    volumeInfo: {
      title: 'Watermelon',
      authors: ['Marian Keyes'],
      publisher: 'Harper Collins',
      publishedDate: '2009-03-17',
      description:
        "February the fifteenth is a very special day for me. It is the day I gave birth to my first child. It is also the day my husband left me...I can only assume the two events weren't entirely unrelated. Claire has everything she ever wanted: a husband she adores, a great apartment, a good job. Then, on the day she gives birth to their first baby, James informs her that he's leaving her. Claire is left with a newborn daughter, a broken heart, and a postpartum body that she can hardly bear to look at. She decides to go home to Dublin. And there, sheltered by the love of a quirky family, she gets better. So much so, in fact, that when James slithers back into her life, he's in for a bit of a surprise.",
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9780061833045',
        },
        {
          type: 'ISBN_10',
          identifier: '0061833045',
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 432,
      printType: 'BOOK',
      categories: ['Fiction'],
      averageRating: 3.5,
      ratingsCount: 38,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '0.2.2.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=hjq7oyeoATwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=hjq7oyeoATwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.com.ua/books?id=hjq7oyeoATwC&printsec=frontcover&dq=:keyes&hl=&cd=1&source=gbs_api',
      infoLink: 'https://play.google.com/store/books/details?id=hjq7oyeoATwC&source=gbs_api',
      canonicalVolumeLink: 'https://play.google.com/store/books/details?id=hjq7oyeoATwC',
    },
    saleInfo: {
      country: 'UA',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 598.66,
        currencyCode: 'UAH',
      },
      retailPrice: {
        amount: 419.06,
        currencyCode: 'UAH',
      },
      buyLink:
        'https://play.google.com/store/books/details?id=hjq7oyeoATwC&rdid=book-hjq7oyeoATwC&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 598660000,
            currencyCode: 'UAH',
          },
          retailPrice: {
            amountInMicros: 419060000,
            currencyCode: 'UAH',
          },
        },
      ],
    },
    accessInfo: {
      country: 'UA',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.ua/books/download/Watermelon-sample-epub.acsm?id=hjq7oyeoATwC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: 'http://play.google.com/books/reader?id=hjq7oyeoATwC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet: 'February the fifteenth is a very special day for me.',
    },
  });
  const {
    authors,
    language,
    pageCount,
    publishedDate,
    title,
    imageLinks,
    publisher,
    description,
    readingModes,
    printType,
    categories,
    averageRating,
    ratingsCount,
    previewLink,
  } = book.volumeInfo;
  const { saleability, isEbook } = book.saleInfo;

  return (
    <div className={s.blur}>
      <div className={s.card}>
        <h2 className={s.title}>{title}</h2>

        <div className={s.box}>
          <div className={s.thumbnail}>
            <img src={imageLinks ? imageLinks.thumbnail : ''} alt={title} />
          </div>
          <div className={s.info}>
            <div className={s.authors}>{authors ? authors.join(', ') : ''}</div>
            <div className={s.pages}>
              <span className={s.textBold}>Pages: </span>
              {pageCount}
            </div>
            <div className={s.language}>
              <span className={s.textBold}>Language: </span>
              {language}
            </div>
            <div className={s.date}>
              <span className={s.textBold}>Published:</span>
              {publishedDate ? new Date(publishedDate).toLocaleDateString('ru-RU') : 'unknown'}
            </div>
            <div className={s.publisher}>
              <span className={s.textBold}>Publisher:</span>
              {publisher}
            </div>

            <div className={s.images}>
              <span className={s.textBold}>Images:</span>
              {readingModes.image ? 'yes' : 'no'}
            </div>
            <div className={s.printType}>
              <span className={s.textBold}>PrintType:</span>
              {printType}
            </div>
            <div className={s.categories}>
              <span className={s.textBold}>Categories:</span>
              <span>{categories ? categories.join(', ') : ''}</span>
            </div>

            <div className={s.saleability}>
              <span className={s.textBold}>Saleability:</span>
              {saleability}
            </div>

            <div className={s.isEbook}>
              <span className={s.textBold}>Is Ebook:</span>
              {isEbook ? 'yes' : 'no'}
            </div>
          </div>
        </div>
        <div className={s.ratingBlock}>
          <div className={s.previewLink}>
            <span className={s.textBold}>PreviewLink:</span>
            <a href={previewLink}> read demo book </a>
          </div>

          <div className={s.averageRating}>
            <span className={s.textBold}>Rating:</span>
            {averageRating}
            <span className={s.textBold}>RatingsCount:</span>
            {ratingsCount}
          </div>
        </div>
        <div className={s.description}>
          <span className={s.textBold}>Description:</span>

          {description}
        </div>
      </div>
    </div>
  );
};

export default FullCard;
