import { EventEntry } from "../utils/EventEntry";
import { EventList } from "../utils/EventList";
import { EventCard } from "./EventCard"



export default function ScheduleBar({ 
    eventlist,
    setEventList,
    setSelectedEvent,
    selectedEvent 
}:  {
    eventlist: EventList;
    setEventList: React.Dispatch<React.SetStateAction<EventList>>;
    setSelectedEvent: (event: EventEntry) => void;
    selectedEvent: EventEntry | null;
}) {

    const events = eventlist.getEvents();

    return (
        <div className="Event-Container">
            <h3>Your Schedule</h3>
            <div className="Scroll-Area">
            {events.map((event, index) => (
                <EventCard
                    setEventList={setEventList}
                    eventList={eventlist}
                    key={index} 
                    event={event} 
                    onClick={() => setSelectedEvent(event)} 
                    isSelected={selectedEvent === event}/>
            ))}
            </div>
        </div>
    )
    
}