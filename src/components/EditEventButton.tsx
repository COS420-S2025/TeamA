import { useNavigate } from "react-router";
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
    const navigate = useNavigate()
    const handleClick = () => {
        console.log(eventList.getEvents().length)
        for(let i = 0; i < eventList.getEvents().length; i++) {
            if (eventList.getEvents()[i].getName() === selectedEvent?.getName() && eventList.getEvents()[i].getDate().toDateString() === selectedEvent?.getDate().toDateString()) {
                console.log("yes")
                eventList.getEvents()[i].setName(name);
                eventList.getEvents()[i].setDescription(description);
                eventList.getEvents()[i].setDate(date);
                eventList.getEvents()[i].setTags(selectedEvent.getTags());
                saveData(email, eventList)
                console.log("edit events:", eventList);
            }
        }
        const result = eventList;
        navigate("/DownloadPage", { state: { result } });
    }
    return (
    <button className="Confirm-Edit" onClick={handleClick}>
        Edit Event
    </button>
    );
}