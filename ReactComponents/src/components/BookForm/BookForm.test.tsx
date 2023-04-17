import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import BookForm from './BookForm';

describe('BookForm component', () => {
  test('renders BookForm', () => {
    const handleSearch = vi.fn();
    render(<BookForm addBook={handleSearch} />);
    const optionElement = screen.getByTestId('BookForm-testId');
    expect(optionElement).toBeInTheDocument();
  });

  test('should render all form fields', () => {
    const mockAddBook = vi.fn();
    render(<BookForm addBook={mockAddBook} />);
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/isbn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Page count/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Authors/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Short description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/long description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Published date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Detective/i)).toBeInTheDocument();
    expect(screen.getByText(/Horror/i)).toBeInTheDocument();
  });

  test('adds a new book when form is submitted with valid data', async () => {
    const mockAddBook = vi.fn();
    render(<BookForm addBook={mockAddBook} />);
    const titleInput = screen.getByLabelText(/Title/i);
    const isbnInput = screen.getByLabelText(/isbn/i);
    const pageCountInput = screen.getByLabelText(/Page count/i);
    const authorsInput = screen.getByLabelText(/Authors/i);
    const shortDescriptionInput = screen.getByLabelText(/Short description/i);
    const longDescriptionInput = screen.getByLabelText(/Long description/i);
    const publishedDateInput = screen.getByLabelText(/Published date/i);
    const statusSelect = screen.getByLabelText(/Status/i);
    const submitButton = screen.getByText(/add book/i);
    const mobileCategory = screen.getByText(/Detective/i);
    const webCategory = screen.getByText(/Horror/i);
    const thumbnailUrl = screen.getByTestId('testid-thumbnailUrl');

    fireEvent.change(titleInput, { target: { value: 'Title' } });
    fireEvent.change(isbnInput, { target: { value: '1234567890' } });
    fireEvent.change(pageCountInput, { target: { value: '100' } });
    fireEvent.change(authorsInput, { target: { value: 'Author One, Author Two' } });
    fireEvent.change(shortDescriptionInput, { target: { value: 'Short description' } });
    fireEvent.change(longDescriptionInput, { target: { value: 'Long description' } });
    fireEvent.change(publishedDateInput, { target: { value: '2023-03-24' } });
    fireEvent.change(statusSelect, { target: { value: 'PUBLISH' } });
    fireEvent.change(thumbnailUrl, { target: { value: 'img-link' } });
    fireEvent.click(mobileCategory);
    fireEvent.click(webCategory);
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockAddBook).toHaveBeenCalledTimes(1));
    expect(mockAddBook).toHaveBeenCalledWith({
      title: 'Title',
      isbn: '1234567890',
      pageCount: '100',
      authors: ['Author One', 'Author Two'],
      shortDescription: 'Short description',
      longDescription: 'Long description',
      publishedDate: { $date: '2023-03-24' },
      thumbnailUrl: 'img-link',
      status: 'PUBLISH',
      categories: ['Detective', 'Horror'],
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

  test('TextareaComponent error', async () => {
    const mockAddBook = vi.fn();
    render(<BookForm addBook={mockAddBook} />);
    fireEvent.click(screen.getByText(/add book/i));
    await waitFor(() => expect(mockAddBook).toHaveBeenCalledTimes(0));
    expect(screen.getByText('Short description is required')).toBeDefined();
  });
});
