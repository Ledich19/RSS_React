import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchComponent from './SearchComponent';
import SearchContainer from './SearchContainer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('<SearchComponent />', () => {
  it('should render component correctly', () => {
    const mockHandleSubmit = vi.fn();
    const handleChange = vi.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <SearchComponent handleChange={handleChange} value={''} handleSubmit={mockHandleSubmit} />
    );
    const inputElement = getByPlaceholderText('What are you looking for?');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = getByTestId('searchBtn-testId');
    expect(buttonElement).toBeInTheDocument();
  });
  it('should call handleSubmit with the search query on form submission', () => {
    const mockHandleSubmit = vi.fn();
    const handleChange = vi.fn();
    const { getByTestId } = render(
      <SearchComponent handleChange={handleChange} value={''} handleSubmit={mockHandleSubmit} />
    );

    const formElement = getByTestId('search-form');
    fireEvent.submit(formElement);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleSubmit).toHaveBeenCalledWith(expect.any(Object));
  });
});

describe('<SearchContainer />', () => {
  it('should render the SearchComponent', () => {
    render(
      <Provider store={store}>
        <SearchContainer />
      </Provider>
    );

    const searchComponent = screen.getByTestId('search-form');
    expect(searchComponent).toBeInTheDocument();
  });

  it('handleSubmit works', () => {
    render(
      <Provider store={store}>
        <SearchContainer />
      </Provider>
    );
    const input = screen.getByPlaceholderText('What are you looking for?');
    fireEvent.change(input, { target: { value: 'Harry Potter' } });
    fireEvent.submit(screen.getByTestId('searchBtn-testId'));
    expect(store.getState().searchText.text).toBe('Harry Potter');
    expect(store.getState().searchText.search).toBe('Harry Potter');
  });
});
