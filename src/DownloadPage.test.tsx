import { render, screen } from "@testing-library/react";
import { DownloadPage } from "./DownloadPage";
import { MemoryRouter } from "react-router";
import { EventList } from "./utils/EventList";

function renderWithRouter() {
  const fakeEventList = new EventList( [] );
  const events = fakeEventList.getEvents(); // or leave default if constructor sets it

  return render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/",
          state: { result: fakeEventList }
        } as any
      ]}
    >
      <DownloadPage />
    </MemoryRouter>
  );
}

test('renders a download button', () => {
  renderWithRouter();
  const button = screen.getByRole('button', { name: /Download ics file/i });
  expect(button).toBeInTheDocument();

});

test('renders add event button', () => {
  renderWithRouter();
  const button = screen.getByRole('button', { name: /Add Event/i});
  expect(button).toBeInTheDocument();
});

test('renders edit event button', () => {

  renderWithRouter();
  
  const button = screen.getByRole('button', { name: /Edit Event/i});
  expect(button).toBeInTheDocument();
});