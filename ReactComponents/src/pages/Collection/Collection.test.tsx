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
    });
  });
});
