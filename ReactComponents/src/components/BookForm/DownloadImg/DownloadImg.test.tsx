import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import DownloadImg from './DownloadImg';

describe('DownloadImg component', () => {
  test('renders DownloadImg', () => {
    render(<DownloadImg refLink={React.createRef<HTMLInputElement>()} />);
    const downloadImgContainer = screen.getByTestId('download-img-container');
    expect(downloadImgContainer).toBeInTheDocument();
  });
  it('should change state on radio button change', () => {
    render(<DownloadImg refLink={React.createRef<HTMLInputElement>()} />);
    const urlRadio = screen.getByLabelText(/url/i);
    const fileRadio = screen.getByLabelText(/file/i);

    fireEvent.click(urlRadio);
    expect(urlRadio).toBeChecked();
    expect(fileRadio).not.toBeChecked();
    fireEvent.click(fileRadio);
    expect(fileRadio).toBeChecked();
    expect(urlRadio).not.toBeChecked();
  });
});
