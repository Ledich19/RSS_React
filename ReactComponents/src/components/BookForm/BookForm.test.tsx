import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';
import { vi } from 'vitest';

const mockProps = {
  name: 'BookForm',
  label: 'BookForm-label',
  rows: 5,
  refLink: React.createRef<HTMLTextAreaElement>(),
};

describe('BookForm component', () => {
  test('renders BookForm', () => {
    const handleSearch = vi.fn();
    render(<BookForm addBook={handleSearch} />);
    const optionElement = screen.getByTestId('BookForm-testId');
    expect(optionElement).toBeInTheDocument();
  });

  test('adds a new book when form is submitted with valid data', async () => {
    const mockAddBook = vi.fn();
    const { getByTestId, getByLabelText } = render(<BookForm addBook={mockAddBook} />);
    const titleInput = getByLabelText(/Title/i);
    const isbnInput = getByLabelText(/isbn/i);
    const pageCountInput = getByLabelText(/Page count/i);
    const authorsInput = getByLabelText(/Authors/i);
    const shortDescriptionInput = getByLabelText(/Short description/i);
    const longDescriptionInput = getByLabelText(/Long description/i);
    const publishedDateInput = getByLabelText(/Published date/i);
    const statusSelect = getByLabelText(/Status/i);
    const categoryCheckboxes = getByTestId('category-checkboxes');
    const submitButton = screen.getByRole('button', { name: /Add book/i });

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

    expect(mockAddBook).toHaveBeenCalledTimes(1);
    expect(mockAddBook).toHaveBeenCalledWith({
      title: 'Book Title',
      isbn: '1234567890',
      pageCount: 100,
      authors: ['Author One', 'Author Two'],
      shortDescription: 'Short description',
      longDescription: 'Long description',
      publishedDate: { $date: '2023-03-24' },
      thumbnailUrl: '',
      status: 'PUBLISH',
      categories: ['open Source'],
    });
  });

  test('does not submit form with invalid input', () => {
    const mockAddBook = vi.fn();
    render(<BookForm addBook={mockAddBook} />);
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Authors/i), {
      target: { value: 'author one, author two' },
    });
    fireEvent.click(screen.getByText(/add book/i));
    expect(mockAddBook).toHaveBeenCalledTimes(0);
  });
});
