import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchComponent from './SearchComponent';
import SearchContainer from './SearchContainer';
import { BookDataContext } from './../../app/context';

describe('<SearchComponent />', () => {
  it('should render component correctly', () => {
    const mockHandleSubmit = vi.fn();
    const mockRefLink = React.createRef<HTMLInputElement>();
    const { getByPlaceholderText, getByTestId } = render(
      <SearchComponent handleSubmit={mockHandleSubmit} refLink={mockRefLink} />
    );
    const inputElement = getByPlaceholderText('What are you looking for?');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = getByTestId('searchBtn-testId');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call handleSubmit with the search query on form submission', () => {
    const mockHandleSubmit = vi.fn();
    const mockRefLink = React.createRef<HTMLInputElement>();

    const { getByTestId } = render(
      <SearchComponent handleSubmit={mockHandleSubmit} refLink={mockRefLink} />
    );

    const formElement = getByTestId('search-form');
    fireEvent.submit(formElement);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleSubmit).toHaveBeenCalledWith(expect.any(Object));
  });
});

describe('<SearchContainer />', () => {
  const mockContextValues = {
    setBooks: vi.fn(),
    setError: vi.fn(),
    setIslLoad: vi.fn(),
  };

  it('should render the SearchComponent', () => {
    render(
      <BookDataContext.Provider value={mockContextValues}>
        <SearchContainer />
      </BookDataContext.Provider>
    );

    const searchComponent = screen.getByTestId('search-form');
    expect(searchComponent).toBeInTheDocument();
  });

  it('handleSubmit works', () => {
    render(
      <BookDataContext.Provider value={mockContextValues}>
        <SearchContainer />
      </BookDataContext.Provider>
    );

    const input = screen.getByPlaceholderText('What are you looking for?');
    fireEvent.change(input, { target: { value: 'Harry Potter' } });
    fireEvent.submit(screen.getByTestId('searchBtn-testId'));

    expect(mockContextValues.setIslLoad).toHaveBeenCalled();
  });

  it('should save the search string in localStorage', () => {
    const searchString = 'Harry Potter';
    render(
      <BookDataContext.Provider value={mockContextValues}>
        <SearchContainer />
      </BookDataContext.Provider>
    );

    const input = screen.getByPlaceholderText('What are you looking for?');
    fireEvent.change(input, { target: { value: searchString } });
    fireEvent.submit(screen.getByTestId('searchBtn-testId'));

    expect(localStorage.getItem('searchString')).toBe(searchString);
  });

  it('should load the search string from localStorage', () => {
    const searchString = 'Harry Potter';
    localStorage.setItem('searchString', searchString);

    render(
      <BookDataContext.Provider value={mockContextValues}>
        <SearchContainer />
      </BookDataContext.Provider>
    );

    const input = screen.getByPlaceholderText('What are you looking for?');
    expect(input).toHaveValue(searchString);
  });
});
