import { render, screen, fireEvent } from "@testing-library/react"
import ScheduleBar from "./ScheduleBar"

// AI was used in the creation of this file

const events = [
    {
    name: "Event 1",
    tags: "tag1",
    date: new Date("2026-01-01"),
    },
    {
    name: "Event 2",
    tags: "tag2",
    date: new Date("2026-01-02"),
    },
];

const eventList = {
    events: events
}

test("render events", () => {
    render(
        <ScheduleBar
        eventlist={eventList as any}
        setSelectedEvent={jest.fn()}
        selectedEvent={null}
        />
    );
    expect(screen.getByText(/Event 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Event 2/i)).toBeInTheDocument();
});

test("clicking event correclty selects the event", () => {
    const selectedEvent = jest.fn();

    render(
        <ScheduleBar
        eventlist={eventList as any}
        setSelectedEvent={selectedEvent}
        selectedEvent={null}
        />
    );
    fireEvent.click(screen.getByText(/Event 1/i));

    expect(selectedEvent).toHaveBeenCalledWith(events[0]);
})
