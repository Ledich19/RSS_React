import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
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
      const optionElement = screen.getByText(option);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('should render error message if passed', () => {
    const errorMessage = 'Something went wrong';
    const { getByText } = render(<Categories {...mockProps} error={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  test('calls the ref function when a checkbox is clicked', () => {
    const { getAllByRole } = render(<Categories {...mockProps} />);

    const checkboxes = getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    expect(mockProps.refsLinks[0].current).toEqual(checkboxes[0]);
  });
});
