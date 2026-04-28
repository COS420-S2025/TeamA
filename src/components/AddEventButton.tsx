import { EventEntry } from "../utils/EventEntry";
import { EventList } from "../utils/EventList";

type AddEventButtonProps = {
    eventList: EventList;
    name: string;
    description: string;
    date: Date;
    onEventAdded?: () => void; //function fixed by cursor
};

export function AddEventButton( { eventList, name, description, date, onEventAdded }: AddEventButtonProps ): React.JSX.Element {
    const handleClick = () => {
        date.setHours(12, 0, 0, 0);
        const event = new EventEntry(name, description, date);
        // ChatGPT helped with the fix of needing to reset the prototype
        Object.setPrototypeOf(eventList, EventList.prototype)
        eventList.addEvent(event);
        onEventAdded?.();
        console.log(eventList)
    }
    return (
    <button className="Manual-Add" onClick={handleClick}>
        Add Event
    </button>
    );
}