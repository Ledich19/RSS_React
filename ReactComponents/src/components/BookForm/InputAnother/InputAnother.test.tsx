import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import InputAnother from './InputAnother';

const mockProps = {
  label: 'InputAnother-label',
  type: 'number',
  name: 'InputAnother',
  refLink: React.createRef<HTMLInputElement>(),
};

describe('InputAnother component', () => {
  test('renders InputAnother', () => {
    render(<InputAnother {...mockProps} />);
    const optionElement = screen.getByText(/InputAnother-label/i);
    expect(optionElement).toBeInTheDocument();
  });

  it('should render error message if passed', () => {
    const errorMessage = 'Something went wrong';
    const { getByText } = render(<InputAnother {...mockProps} error={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('should render sign when is required', () => {
    const { getByText } = render(<InputAnother {...mockProps} required={true} />);
    const errorElement = getByText('*');
    expect(errorElement).toBeInTheDocument();
  });
});
