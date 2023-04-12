import { render, screen, waitFor } from '@testing-library/react';
import Collection from './Collection';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('<Collection />', () => {
  it('should display loading spinner when books are being fetched', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Collection />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('magnifying-glass-svg')).toBeInTheDocument();
  });

  it('should display all books', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Collection />
        </Provider>
      </MemoryRouter>
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
});
