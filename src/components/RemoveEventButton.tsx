import { EventEntry } from "../utils/EventEntry";
import { EventList } from "../utils/EventList";
import RemoveButton from '../assets/RemoveButton.png'

type RemoveEventButtonProps = {
    eventList: EventList;
    event: EventEntry;
    setEventList: React.Dispatch<React.SetStateAction<EventList>>;
    onEventRemoved?: () => void; //function fixed by cursor
};

export function RemoveEventButton( { eventList, event, onEventRemoved, setEventList }: RemoveEventButtonProps ): React.JSX.Element {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        // ChatGPT helped with the fix of needing to reset the prototype
        
        const updated = new EventList([...eventList.events])
        updated.removeEvent(event);

        setEventList(updated);
        onEventRemoved?.();

        console.log(eventList)
    }
    return (
    <button className="Remove" onClick={handleClick}>
        <img src={RemoveButton} alt=""/>
    </button>
    );
}

