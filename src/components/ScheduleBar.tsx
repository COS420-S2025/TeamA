import { useNavigate } from "react-router";
import { EventEntry } from "../utils/EventEntry";
import { EventList } from "../utils/EventList";
import { EventCard } from "./EventCard"



export default function ScheduleBar({ 
    eventlist,
    setSelectedEvent,
    selectedEvent 
}:  {
    eventlist: EventList;
    setSelectedEvent: (event: EventEntry | null) => void;
    selectedEvent: EventEntry | null;
}) {

    const events = eventlist.events;
    const navigate = useNavigate()

    const handleClick = () => {
        setSelectedEvent(selectedEvent);
        navigate("/DownLoadPage", {state: { selectedEvent }})
    }

    return (
        <div className="Event-Container">
            <h3>Your Schedule</h3>
            <div className="Scroll-Area">
            {events.map((event, index) => (
                <EventCard 
                    key={index} 
                    event={event} 
                    onClick={handleClick} 
                    isSelected={selectedEvent === event}/>
            ))}
            </div>
        </div>
    )
    
}