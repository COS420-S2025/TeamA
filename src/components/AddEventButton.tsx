import { EventEntry } from "../utils/EventEntry";
import { EventList } from "../utils/EventList";
<<<<<<< HEAD
import { inferTagsFromText, mergeTags, parseUserTags } from "../utils/EventTagging";
=======
import { saveData } from "../utils/FireBase";
>>>>>>> f2cd5474355e5763b2277ece89e2955fbf59496f

type AddEventButtonProps = {
    eventList: EventList;
    name: string;
    description: string;
    date: Date;
    tags: string;
    onEventAdded?: () => void; //function fixed by cursor
};

export function AddEventButton( { eventList, name, description, date, tags, onEventAdded }: AddEventButtonProps ): React.JSX.Element {
    const handleClick = () => {
        date.setHours(12, 0, 0, 0);
        const event = new EventEntry(name, description, date);
        const inferredTags = inferTagsFromText(name, description);
        const userTags = parseUserTags(tags);
        event.setTags(mergeTags(inferredTags, userTags));
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