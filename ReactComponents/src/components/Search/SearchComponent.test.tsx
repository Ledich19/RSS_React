import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchComponent from './SearchComponent';
import SearchContainer from './SearchContainer';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('<SearchComponent />', () => {
  test('input should update value correctly', async () => {
    render(<SearchContainer setSearchState={() => {}} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'testing a form...');
    expect(input).toHaveValue('testing a form...');
  });

  test('submit button should call handleSearch', () => {
    const handleSearch = vi.fn();
    render(
      <SearchComponent
        value={'search value test'}
        handleInputChange={() => {}}
        handleSearch={handleSearch}
      />
    );

    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});

describe('<SearchContainer />', () => {
  test('submit button should call setSearchState', () => {
    const setSearchState = vi.fn();
    render(<SearchContainer setSearchState={setSearchState} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'testing a form...' } });

    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);

    expect(setSearchState).toHaveBeenCalledTimes(1);
    expect(setSearchState.mock.calls[0][0]).toBe('testing a form...');
  });
});
