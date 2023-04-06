import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('<Header>', () => {
  test('renders links to Home, and About us , Add book', () => {
    render(
      <MemoryRouter>
        <Header islLoad={false} />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Add book')).toBeInTheDocument();
  });
  it('should render search container when on /app path', () => {
    render(
      <MemoryRouter initialEntries={['/app']}>
        <Header islLoad={false} />
      </MemoryRouter>
    );
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
  });
  it('should render MagnifyingGlass when islLoad is true', () => {
    render(
      <MemoryRouter>
        <Header islLoad={true} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('magnifying-glass-svg')).toBeInTheDocument();
  });
  it('should not render MagnifyingGlass when islLoad is false', () => {
    render(
      <MemoryRouter>
        <Header islLoad={false} />
      </MemoryRouter>
    );
    expect(screen.queryByTestId('magnifying-glass-svg')).not.toBeInTheDocument();
  });
});
