import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddBook from './AddBook';

describe('AddBook', () => {
  test('should add a book when form is submitted', () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <AddBook />
      </MemoryRouter>
    );
    const titleInput = getByLabelText(/Title/i);
    const isbnInput = getByLabelText(/isbn/i);
    const pageCountInput = getByLabelText(/Page count/i);
    const authorsInput = getByLabelText(/Authors/i);
    const shortDescriptionInput = getByLabelText(/Short description/i);
    const longDescriptionInput = getByLabelText(/Long description/i);
    const publishedDateInput = getByLabelText(/Published date/i);
    const statusSelect = getByLabelText(/Status/i);
    const categoryCheckboxes = screen.getByTestId('category-checkboxes');
    const submitButton = screen.getByRole('button', { name: /add book/i });

    fireEvent.change(titleInput, { target: { value: 'Book Title' } });
    fireEvent.change(isbnInput, { target: { value: '1234567890' } });
    fireEvent.change(pageCountInput, { target: { value: '100' } });
    fireEvent.change(authorsInput, { target: { value: 'Author One, Author Two' } });
    fireEvent.change(shortDescriptionInput, { target: { value: 'Short description' } });
    fireEvent.change(longDescriptionInput, { target: { value: 'Long description' } });
    fireEvent.change(publishedDateInput, { target: { value: '2023-03-24' } });
    fireEvent.change(statusSelect, { target: { value: 'PUBLISH' } });
    if (categoryCheckboxes.firstChild) {
      fireEvent.click(categoryCheckboxes.firstChild);
    }
    fireEvent.click(submitButton);

    getByText(/Book Title/i);
    getByText(/Author One/i);
    getByText(/100/i);
    getByText(/24.03.2023/i);
  });
});
