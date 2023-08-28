import React from 'react';
import { render } from '@testing-library/react';
import NotifyComponent from './NotifyComponent';

describe('NotifyComponent', () => {
  it('renders nothing when no notifyMessage is provided', () => {
    const { container } = render(<NotifyComponent notifyMessage={{ text: '', type: '' }} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders nothing when notifyMessage has no text', () => {
    const { container } = render(<NotifyComponent notifyMessage={{ text: '', type: 'info' }} />);
    expect(container.firstChild).toBeNull();
  });

  it('applies the provided className to the notify element', () => {
    const { container } = render(
      <NotifyComponent
        className="test-class"
        notifyMessage={{ text: 'Test message', type: 'info' }}
      />
    );
    expect(container.firstChild).toHaveClass('notify test-class');
  });
});
