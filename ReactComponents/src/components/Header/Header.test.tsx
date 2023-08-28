import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('renders links to Home, and About us , Add book', () => {
  render(
    <MemoryRouter>
      <Header setSearchState={() => {}} />
    </MemoryRouter>
  );

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About us')).toBeInTheDocument();
  expect(screen.getByText('Add book')).toBeInTheDocument();
});
