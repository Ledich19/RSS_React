import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import booksService from '../../services/books';
import { BookDataContext } from '../../app/context';
import { vi } from 'vitest';

import FullCard from './FullCard';

const mockBook = {
  kind: 'books#volume',
  id: '123',
  etag: 'IR6JoVAvEIM',
  selfLink: 'https://www.googleapis.com/books/v1/volumes/TkxNSot3eMEC',
  volumeInfo: {
    title: 'Test Book',
    subtitle: 'Subtitle',
    authors: ['Author One, Author Two'],
    publisher: 'Test Publisher',

    publishedDate: '2022-01-01',
    description: 'This is a test book.',

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
    readingModes: { image: true },
    pageCount: 500,
    printedPageCount: 543,
    dimensions: {
      height: '20.00 cm',
    },
    printType: 'BOOK',
    categories: ['Test Category'],
    averageRating: 4.5,
    ratingsCount: 10,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '3.24.27.0.preview.2',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      thumbnail: 'test-thumbnail.jpg',
    },
    language: 'en',
    previewLink: 'https://test-preview-link.com',
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

const mockDataContextValue = {
  setBooks: vi.fn(),
  setError: vi.fn(),
  setIslLoad: vi.fn(),
};

vi.mock('../../services/books.ts', () => {
  const booksService = {
    getById: vi.fn(() => Promise.resolve(mockBook)),
  };
  return booksService;
});

describe('FullCard', () => {
  it('renders book details', async () => {
    render(
      <BookDataContext.Provider value={mockDataContextValue}>
        <MemoryRouter initialEntries={['/app/123']}>
          <Routes>
            <Route path="/app/:id" element={<FullCard />}></Route>
          </Routes>
        </MemoryRouter>
      </BookDataContext.Provider>
    );

    expect(await mockDataContextValue.setIslLoad).toHaveBeenCalledTimes(2);
    await waitFor(() => {
      expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
      expect(screen.getByText('Test Author')).toBeInTheDocument();
      expect(screen.getByText('Pages: 100')).toBeInTheDocument();
      expect(screen.getByText('Language: en')).toBeInTheDocument();
      expect(screen.getByText('Published: 1/1/2022')).toBeInTheDocument();
      expect(screen.getByText('Publisher: Test Publisher')).toBeInTheDocument();
      expect(screen.getByText('readingMode: yes')).toBeInTheDocument();
      expect(screen.getByText('PrintType: BOOK')).toBeInTheDocument();
      expect(screen.getByText('Categories: Fiction')).toBeInTheDocument();
      expect(screen.getByText('Saleability: FOR_SALE')).toBeInTheDocument();
      expect(screen.getByText('Is Ebook: yes')).toBeInTheDocument();
      expect(screen.getByText('PreviewLink:')).toBeInTheDocument();
      expect(screen.getByText(' read demo book ')).toHaveAttribute(
        'href',
        'http://test.com/preview'
      );
      expect(screen.getByText('Rating:')).toBeInTheDocument();
      expect(screen.getByText('4.5')).toBeInTheDocument();
      expect(screen.getByText('RatingsCount:')).toBeInTheDocument();
      expect(screen.getByText('10')).toBeInTheDocument();
      expect(screen.getByText('Description:')).toBeInTheDocument();
      expect(screen.getByText('Test description.')).toBeInTheDocument();
      expect(screen.getByAltText('Test Book')).toHaveAttribute('src', 'http://test.com/image.png');
    });
  });

  //   it('should close modal when clicking outside the card', () => {
  //     const mockEvent = { target: { contains: jest.fn(() => false) } };
  //     act(() => {
  //       wrapper.find('.blur').simulate('click', mockEvent);
  //     });
  //     expect(mockNavigate).toHaveBeenCalledWith('/app');
  //   });
});
