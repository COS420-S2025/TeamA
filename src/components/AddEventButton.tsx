import { EventEntry } from "../utils/EventEntry";
import { EventList } from "../utils/EventList";

type AddEventButtonProps = {
    eventList: EventList;
    name: string;
    description: string;
    date: Date;
};

export function AddEventButton( { eventList, name, description, date}: AddEventButtonProps ): React.JSX.Element {
    const handleClick = () => {
        const event = new EventEntry(name, description, date);
        eventList.addEvent(event);
    }
    return (
    <button className="Manual-Add" onClick={handleClick}>
        Add Event
    </button>
    );
}