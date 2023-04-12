import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('<Header>', () => {
  test('renders links to Home, and About us , Add book', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Add book')).toBeInTheDocument();
  });

  it('should render search container when on /app path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/app']}>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
  });

  it('should navigate to Home when Home link is clicked', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveAttribute('href', '/app');
    expect(homeLink).not.toHaveClass('_activeLink_f4f7a7');
    fireEvent.click(homeLink);
    expect(homeLink).toHaveClass('_activeLink_f4f7a7');

    const AboutLink = screen.getByText('About us');
    expect(AboutLink).toHaveAttribute('href', '/about');
    expect(AboutLink).not.toHaveClass('_activeLink_f4f7a7');
    fireEvent.click(AboutLink);
    expect(AboutLink).toHaveClass('_activeLink_f4f7a7');

    const AddBookLink = screen.getByText('Add book');
    expect(AddBookLink).toHaveAttribute('href', '/blank');
    expect(AddBookLink).not.toHaveClass('_activeLink_f4f7a7');
    fireEvent.click(AddBookLink);
    expect(AddBookLink).toHaveClass('_activeLink_f4f7a7');
  });

  // it('should render MagnifyingGlass when islLoad is true', () => {
  //   render(
  //     <MemoryRouter>
  //       <Header />
  //     </MemoryRouter>
  //   );

  //   expect(screen.getByTestId('magnifying-glass-svg')).toBeInTheDocument();
  // });
  // it('should not render MagnifyingGlass when islLoad is false', () => {
  //   render(
  //     <MemoryRouter>
  //       <Header />
  //     </MemoryRouter>
  //   );
  //   expect(screen.queryByTestId('magnifying-glass-svg')).not.toBeInTheDocument();
  // });
});
