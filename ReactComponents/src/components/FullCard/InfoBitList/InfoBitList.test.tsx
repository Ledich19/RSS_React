import { render } from '@testing-library/react';
import InfoBitList from './InfoBitList';

describe('InfoBitList component', () => {
  const label = 'Genres';
  const list = ['Science Fiction', 'Fantasy', 'Adventure'];

  it('should render the component with the correct label and list of items', () => {
    const { getByText } = render(<InfoBitList label={label} list={list} />);
    const labelElement = getByText(`${label}:`);
    const listElement = getByText(list.join(', '));
    expect(labelElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });

  it('should render the component with an empty list when no list prop is provided', () => {
    const { getByTestId } = render(<InfoBitList label={label} />);
    const listElement = getByTestId('InfoBitList-testId');
    expect(listElement).toBeInTheDocument();
  });

  it('should render the component with an empty list when an empty list prop is provided', () => {
    const { getByTestId } = render(<InfoBitList label={label} list={[]} />);
    const listElement = getByTestId('InfoBitList-testId');
    expect(listElement).toBeInTheDocument();
  });
});
