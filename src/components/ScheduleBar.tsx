import { useNavigate } from "react-router";
import { EventEntry } from "../utils/EventEntry";
import { EventList } from "../utils/EventList";
import { EventCard } from "./EventCard"

function sameScheduledEvent(selected: EventEntry | null, event: EventEntry): boolean {
    if (!selected) return false;
    return (
        selected.getName() === event.getName() &&
        selected.getDescription() === event.getDescription() &&
        selected.getDate().getTime() === event.getDate().getTime()
    )
}

export default function ScheduleBar({ 
    eventlist,
    setSelectedEvent,
    selectedEvent 
}:  {
    eventlist: EventList;
    setSelectedEvent: (event: EventEntry | null) => void;
    selectedEvent: EventEntry | null;
}) {

    const events = eventlist?.events;
    const navigate = useNavigate()

    const handleClick = (event: EventEntry) => {
        const result = new EventList(events ?? [])
        setSelectedEvent(event)
        navigate("/DownloadPage", { state: { selectedEvent: event, result } })
    }

    return (
        <div className="Event-Container">
            <h3>Your Schedule</h3>
            <div className="Scroll-Area">
            {events?.map((event, index) => (
                <EventCard 
                    key={index} 
                    event={event} 
                    onClick={() => handleClick(event)} 
                    isSelected={sameScheduledEvent(selectedEvent, event)}/>
            ))}
            </div>
        </div>
    )
    
}