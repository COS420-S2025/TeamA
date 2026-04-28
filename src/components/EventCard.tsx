import { EventEntry } from "../utils/EventEntry";
import RemoveButton from '../assets/RemoveButton.png'



export function EventCard({
    event,
    onClick,
    isSelected
}: {
    event: EventEntry;
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
                    <button>
                        <img src={RemoveButton} alt=''/>
                    </button>
            </button>
    );
}