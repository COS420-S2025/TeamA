import { render, screen } from "@testing-library/react";
import { DownloadPage } from "./DownloadPage";

test('renders a download button', () => {
  render(<DownloadPage/>);
  const button = screen.getByRole('button', { name: /Download ics file/i });
  expect(button).toBeInTheDocument();
});

test('renders add event button', () => {
  render(<DownloadPage/>);
  const button = screen.getByRole('button', { name: /Add Event/i});
  expect(button).toBeInTheDocument();
});

test('renders edit event button', () => {
  render(<DownloadPage/>);
  const button = screen.getByRole('button', { name: /Edit Event/i});
  expect(button).toBeInTheDocument();
});