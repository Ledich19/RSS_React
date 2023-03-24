import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Categories from './Categories';

const mockProps = {
  name: 'category',
  options: ['Option 1', 'Option 2', 'Option 3'],
  refsLinks: [
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
  ],
};

describe('Categories component', () => {
  test('renders Categories', () => {
    render(<Categories {...mockProps} />);
    mockProps.options.forEach((option) => {
      const optionElement = screen.getByText('Option 2');
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('should render error message if passed', () => {
    const errorMessage = 'Something went wrong';
    const { getByText } = render(<Categories {...mockProps} error={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
