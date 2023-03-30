import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddBook from './AddBook';

describe('AddBook', () => {
  test('should add a book when form is submitted', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <AddBook />
      </MemoryRouter>
    );
    const titleInput = screen.getByLabelText(/Title/i);
    const isbnInput = screen.getByLabelText(/isbn/i);
    const pageCountInput = screen.getByLabelText(/Page count/i);
    const authorsInput = screen.getByLabelText(/Authors/i);
    const shortDescriptionInput = screen.getByLabelText(/Short description/i);
    const longDescriptionInput = screen.getByLabelText(/Long description/i);
    const publishedDateInput = screen.getByLabelText(/Published date/i);
    const statusSelect = screen.getByLabelText(/Status/i);
    const submitButton = screen.getByText(/add book/i);
    const mobileCategory = screen.getByText(/mobile/i);
    const webCategory = screen.getByText(/web/i);

    fireEvent.change(titleInput, { target: { value: 'Book Title' } });
    fireEvent.change(isbnInput, { target: { value: '1234567890' } });
    fireEvent.change(pageCountInput, { target: { value: '100' } });
    fireEvent.change(authorsInput, { target: { value: 'Author One, Author Two' } });
    fireEvent.change(shortDescriptionInput, { target: { value: 'Short description' } });
    fireEvent.change(longDescriptionInput, { target: { value: 'Long description' } });
    fireEvent.change(publishedDateInput, { target: { value: '2023-03-24' } });
    fireEvent.change(statusSelect, { target: { value: 'PUBLISH' } });
    fireEvent.click(mobileCategory);
    fireEvent.click(webCategory);
    fireEvent.click(submitButton);

    await waitFor(() => {
      getByText(/Book Title/i);
      getByText(/Author One/i);
      getByText(/100/i);
      getByText(/24.03.2023/i);
    });
  });
});
