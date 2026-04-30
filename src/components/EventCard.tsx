import { EventEntry } from "../utils/EventEntry";



export function EventCard({
    event,
    onClick,
    isSelected
}: {
    event: EventEntry;
    onClick: () => void;
    isSelected: boolean
}) {
    const tagText = Array.from(event.tags).join(", ");
    return (
            <button className={`Event-Card ${isSelected ? "selected" : ""}`} onClick={onClick}>
                <div className="Event-Header">
                    <h3>{ event.name }{tagText ? ` [${tagText}]` : ""}</h3>
                    <span className="Event-Date">
                        { event.date.toString() }
                    </span>
                </div>

                <p className="Event-Description">
                    {event.description}</p>
            </button>
    );
}