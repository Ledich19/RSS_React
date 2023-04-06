import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CardNew from './CardNew';

test('renders content', () => {
  const infoData = {
    kind: 'books#volume',
    id: 'TkxNSot3eMEC',
    etag: 'IR6JoVAvEIM',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/TkxNSot3eMEC',
    volumeInfo: {
      title: 'Title',
      subtitle: 'Subtitle',
      authors: ['Author One, Author Two'],
      publisher: 'Publisher',
      publishedDate: '2007-02-08',
      description:
        "<p><b>*** CONGRATULATIONS TO THE BRITISH BOOK AWARDS AUTHOR OF THE YEAR 2022***</b><br><b><br>Discover the warm, witty and compelling story of a woman trying to get her life back on track, from the No. 1 bestselling author of <i>Grown Ups<br></i></b><br><b>'Searingly insightful, Keyes finds lightness in the darkest and most violent of emotions' </b><i>Independent</i><br><b>'High quality entertainment' </b><i>Marie Claire</i><br>_________<br><br><b>Meet Anna Walsh. </b><br><br>Lying in her parents' Good Front Room, covered in bandages, Anna dreams of leaving Dublin and returning to her beloved New York.<br><br>To her home. To her job. And most of all to her husband Aidan.<br><br>Unfortunately, her family have other ideas. She's staying put. And Aidan? He's refusing to even take her calls. <br><br>The last thing Anna wants is to think about how she ended up in this mess. But with nothing else to do, she's forced to ask herself why she's thousands of miles from the life she loves. <br><br>Where did it all go wrong? And can she fix it, before it's too late? <br><br><b>Love the Walsh sisters? Don't miss out on the eagerly awaited sequel to Rachel's Holiday: <i>AGAIN, RACHEL . . .</i></b><br>_________<br><br><b>'A wonderful, subtle, hilarious and highly sophisticated novel' </b><i>Evening Standard</i><br>'<b>Richly enjoyable' </b><i>Daily Telegraph</i><br><br><b>FAMOUS FANS AND WHY THEY LOVE MARIAN KEYES</b><br><br><b>'Marian's writing is the truth. With big laughs' </b>Dawn French<br><b>'A giant of Irish writing'</b> Naoise Dolan<br><b>'Will make you laugh and make you cry, but will also reveal the truth of who you really are' </b>Louise O'Neill<br><b>'Keyes weaves the joy and pain of life in a unique and magical way' </b>Cathy Rentzenbrink<br><b>'One of the most honest writers writing today' </b>Pandora Sykes<br><b>'Compassionate, tender, incisive writing' </b>Lucy Foley<br><b>'Her talent for tackling serious issues with such humanity and wit is balm for the soul'</b> Nigella Lawson<br><b>'Marian Keyes is a brilliant writer. No one is better at making terrifically funny jokes while telling such important, perceptive and agonizing stories of the heart. She is a genius' </b>Sali Hughes<br><b>'Irresistible, profound. Keyes's comic gift is always evident' </b><i>Independent</i><br><b>'Joyful. Keyes' clever way with words and extraordinary wit. People stared at me as I laughed to myself'</b> C.L. Taylor<br><b>'A born storyteller'</b><i> Independent on Sunday</i></p>",
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '0141904755',
        },
        {
          type: 'ISBN_13',
          identifier: '9780141904757',
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 500,
      printedPageCount: 543,
      dimensions: {
        height: '20.00 cm',
      },
      printType: 'BOOK',
      categories: ['Fiction / Humorous / General'],
      averageRating: 3,
      ratingsCount: 3,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '3.24.27.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=TkxNSot3eMEC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72UDVOelTh6CWlrGHiZfhiik_iVw_qP75ru2eupp4dyCJh_VD_wz_waofCef-dMQNv7mCjOSy9qXx7Dl3n-r8pPHFVj0a0RjypRjhr6wt0-krmPw04GLJNuSC0CdaxHdOWwPrSq&source=gbs_api',
      },
      language: 'en',
      previewLink: 'http://books.google.com.ua/books?id=TkxNSot3eMEC&hl=&source=gbs_api',
      infoLink: 'https://play.google.com/store/books/details?id=TkxNSot3eMEC&source=gbs_api',
      canonicalVolumeLink: 'https://play.google.com/store/books/details?id=TkxNSot3eMEC',
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '30',
        },
      ],
    },
    saleInfo: {
      country: 'UA',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 351.89,
        currencyCode: 'UAH',
      },
      retailPrice: {
        amount: 351.89,
        currencyCode: 'UAH',
      },
      buyLink:
        'https://play.google.com/store/books/details?id=TkxNSot3eMEC&rdid=book-TkxNSot3eMEC&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 351890000,
            currencyCode: 'UAH',
          },
          retailPrice: {
            amountInMicros: 351890000,
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
          'http://books.google.com.ua/books/download/Anybody_Out_There-sample-epub.acsm?id=TkxNSot3eMEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink: 'http://play.google.com/books/reader?id=TkxNSot3eMEC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
  };

  render(<CardNew infoData={infoData} />);

  expect(screen.getByText('Title')).toBeDefined();
  expect(screen.getByText(/Author One/i)).toBeDefined();
  expect(screen.getByText('500')).toBeDefined();
  expect(screen.getByText('08.02.2007')).toBeDefined();
  expect(screen.getByText('en')).toBeDefined();
});
