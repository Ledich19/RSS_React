import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

test('renders links to Home, and About us , Add book', () => {
  render(
    <MemoryRouter>
      <Header setSearchState={() => {}} />
    </MemoryRouter>
  );

  expect(screen.getByText('Home')).toHaveClass('activeLink');
  expect(screen.getByText('About us')).not.toHaveClass('activeLink');
  expect(screen.getByText('Add book')).not.toHaveClass('activeLink');
});
