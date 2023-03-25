import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Page404 from './Page404';

test('renders Page404', () => {
  render(<Page404 />);

  expect(screen.getByText('404')).toBeDefined();
  expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeDefined();
});
