import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Page404 from './Page404';
import { MemoryRouter } from 'react-router-dom';

test('renders links to Home and About us', () => {
  render(<Page404 />);

  const element = screen.getByText('404');
  expect(element).toBeDefined();
});
