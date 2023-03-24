import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import InputText from './InputText';

const mockProps = {
  label: 'InputText-label',
  type: 'number',
  name: 'InputText',
  refLink: React.createRef<HTMLInputElement>(),
};

describe('InputText component', () => {
  test('renders InputText', () => {
    render(<InputText {...mockProps} />);
    const optionElement = screen.getByText(/InputText-label/i);
    expect(optionElement).toBeInTheDocument();
  });

  it('should render error message if passed', () => {
    const errorMessage = 'Something went wrong';
    const { getByText } = render(<InputText {...mockProps} error={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('should render sign when is required', () => {
    const { getByText } = render(<InputText {...mockProps} required={true} />);
    const errorElement = getByText('*');
    expect(errorElement).toBeInTheDocument();
  });
});
