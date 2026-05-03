import { EventEntry } from "../utils/EventEntry";
import { RemoveEventButton } from "./RemoveEventButton";
import { EventList } from "../utils/EventList";



export function EventCard({
    event,
    eventList,
    onClick,
    setEventList,
    isSelected
}: {
    setEventList: React.Dispatch<React.SetStateAction<EventList>>;
    event: EventEntry;
    eventList: EventList;
    onClick: () => void;
    isSelected: boolean
}) {
    return (
            <button className={`Event-Card ${isSelected ? "selected" : ""}`} onClick={onClick}>
                <div className="Event-Header">
                    <h3>{ event.name }{ event.tags }</h3>
                    <span className="Event-Date">
                        { event.date.toString() }
                    </span>
                </div>

                <p className="Event-Description">
                    {event.description}</p>
                    <RemoveEventButton event={event} eventList={eventList} setEventList={setEventList}/>
            </button>
    );
}