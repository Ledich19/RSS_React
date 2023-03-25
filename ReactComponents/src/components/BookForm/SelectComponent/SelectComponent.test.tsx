import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import SelectComponent from './SelectComponent';

const mockProps = {
  name: 'SelectComponent',
  label: 'SelectComponent',
  options: ['option 1', 'option 2', 'option 3'],
  refLink: React.createRef<HTMLSelectElement>(),
};

describe('SelectComponent component', () => {
  test('renders SelectComponent', () => {
    render(<SelectComponent {...mockProps} />);
    const selectElement = screen.getByLabelText('status :') as HTMLSelectElement;
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.options.length).toBe(3);
    expect(selectElement.options[0].value).toBe('option 1');
    expect(selectElement.options[1].value).toBe('option 2');
    expect(selectElement.options[2].value).toBe('option 3');
  });

  // it('should render sign when is required', () => {
  //   const { getByText } = render(<SelectComponent {...mockProps} required={true} />);
  //   const errorElement = getByText('*');
  //   expect(errorElement).toBeInTheDocument();
  // });
});
