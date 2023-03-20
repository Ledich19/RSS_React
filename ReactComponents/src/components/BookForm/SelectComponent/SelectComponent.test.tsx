import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './SelectComponent';
import { MemoryRouter } from 'react-router-dom';

test('renders links to Home and About us', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'About us' });
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
