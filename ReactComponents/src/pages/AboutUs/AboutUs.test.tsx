import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

test('renders AboutUs', () => {
  render(<AboutUs />);

  const element = screen.getByText('About Us');
  expect(element).toBeDefined();
});
