import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { BookDataContext } from '../../app/context';
import { vi } from 'vitest';

import FullCard from './FullCard';

const mockDataContextValue = {
  setBooks: vi.fn(),
  setError: vi.fn(),
  setIslLoad: vi.fn(),
};

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

    await waitFor(() => {
      expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
      expect(screen.getByText(/Author One/i)).toBeInTheDocument();
      expect(screen.getByText(/500/i)).toBeInTheDocument();
      expect(screen.getByText('en')).toBeInTheDocument();
      expect(screen.getByText('01.01.2022')).toBeInTheDocument();
      expect(screen.getByText('Test Publisher')).toBeInTheDocument();
      expect(screen.getByText('yes')).toBeInTheDocument();
      expect(screen.getByText('Test PrintType')).toBeInTheDocument();
      expect(screen.getByText(/Test Category/i)).toBeInTheDocument();
      expect(screen.getByText('FOR_SALE')).toBeInTheDocument();
      expect(screen.getByText('no')).toBeInTheDocument();
      expect(screen.getByText('PreviewLink:')).toBeInTheDocument();
      expect(screen.getByText('read demo book')).toHaveAttribute(
        'href',
        'https://test-preview-link.com'
      );
      expect(screen.getByText('Rating:')).toBeInTheDocument();
      expect(screen.getByText(/4.5/i)).toBeInTheDocument();
      expect(screen.getByText('RatingsCount:')).toBeInTheDocument();
      expect(screen.getByText(/10/i)).toBeInTheDocument();
      expect(screen.getByText('Description:')).toBeInTheDocument();
      expect(screen.getByText('This is a test description.')).toBeInTheDocument();
      expect(screen.getByAltText('Test Book')).toHaveAttribute('src', 'test-thumbnail.jpg');
    });
  });

  it('can be close', async () => {
    render(
      <BookDataContext.Provider value={mockDataContextValue}>
        <MemoryRouter initialEntries={['/app/123']}>
          <Routes>
            <Route path="/app/:id" element={<FullCard />}></Route>
          </Routes>
        </MemoryRouter>
      </BookDataContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
    });
    const blur = screen.getByTestId('test-blur');
    fireEvent.click(blur);
    expect(screen.queryByTestId('test-blur')).not.toBeInTheDocument();
  });

  test('renders error message when book details are not available', async () => {
    const mockDataContextValue = {
      setBooks: vi.fn(),
      setError: vi.fn(),
      setIslLoad: vi.fn(),
    };
    render(
      <BookDataContext.Provider value={mockDataContextValue}>
        <MemoryRouter initialEntries={['/app/124']}>
          <Routes>
            <Route path="/app/:id" element={<FullCard />}></Route>
          </Routes>
        </MemoryRouter>
      </BookDataContext.Provider>
    );

    await waitFor(() => {
      expect(mockDataContextValue.setIslLoad).toHaveBeenCalledTimes(2);
      expect(mockDataContextValue.setIslLoad).toHaveBeenNthCalledWith(1, true);
      expect(mockDataContextValue.setIslLoad).toHaveBeenNthCalledWith(2, false);

      expect(mockDataContextValue.setError).toHaveBeenCalledTimes(1);
      expect(mockDataContextValue.setError).toHaveBeenCalledWith('Network Error');
    });
  });
});
