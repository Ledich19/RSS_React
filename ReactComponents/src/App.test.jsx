import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';

describe('App', () => {
  test('should be render', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('App-testId')).toBeInTheDocument();
  });

  // test('should set search state', () => {
  //   const component = render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   const { container } = component;
  //   const input = screen.getByPlaceholderText('What are you looking for?');
  //   fireEvent.change(input, { target: { value: 'book' } });

  //   const searchButton = screen.getByTestId('searchBtn-testId');
  //   fireEvent.click(searchButton);

  //   expect(input.value).toBe('book');
  //   expect(container).toHaveTextContent('search');
  //   //expect(screen.getByTestId('App-testId')).toHaveAttribute('search', 'book');
  // });
});
