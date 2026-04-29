import { EventEntry } from "../utils/EventEntry";
import { EventList } from "../utils/EventList";
import { saveData } from "../utils/FireBase";

type EditEventButtonProps = {
    eventList: EventList;
    name: string;
    description: string;
    date: Date;
    email: string;
    selectedEvent: EventEntry | null;
};
export function EditEventButton( { eventList, name, description, date, email, selectedEvent }: EditEventButtonProps ): React.JSX.Element {
    const handleClick = () => {
        for(let i = 0; i < eventList.getEvents().length; i++) {
            if (eventList.getEvents()[i].getName() === selectedEvent?.getName() && eventList.getEvents()[i].getDate() === selectedEvent?.getDate()) {
                const event = eventList.getEvents()[i]
                event.setName(name);
                event.setDescription(description);
                event.setDate(date);
                event.setTags(selectedEvent.getTags());
                eventList.getEvents()[i] = event;
                saveData(email, eventList)
            }
        }
    }
    return (
    <button className="Confirm-Edit" onClick={handleClick}>
        Edit Event
    </button>
    );
}