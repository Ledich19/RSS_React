import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import TextareaComponent from './TextareaComponent';

const mockProps = {
  name: 'TextareaComponent',
  label: 'TextareaComponent-label',
  rows: 5,
  refLink: React.createRef<HTMLTextAreaElement>(),
};

describe('TextareaComponent component', () => {
  test('renders TextareaComponent', () => {
    render(<TextareaComponent {...mockProps} />);
    const optionElement = screen.getByText(/TextareaComponent-label/i);
    expect(optionElement).toBeInTheDocument();
  });

  it('should render error message if passed', () => {
    const errorMessage = 'Something went wrong';
    const { getByText } = render(<TextareaComponent {...mockProps} error={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('should render sign when is required', () => {
    const { getByText } = render(<TextareaComponent {...mockProps} required={true} />);
    const errorElement = getByText('*');
    expect(errorElement).toBeInTheDocument();
  });
});
