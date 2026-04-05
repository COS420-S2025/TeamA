import { EventEntry } from "./EventEntry"
import { EventList } from "./EventList"

export function CreateEventList(dateArr: Date[]): EventList {
    let eventArr: EventEntry[] = [];
    for(let i: number = 0; i < dateArr.length; i++) {
        if (dateArr[i] != null) {
            const event = new EventEntry("name", "description", dateArr[i]);
            eventArr.push(event);
        }
    }
    const eventList = new EventList(eventArr);
    return eventList;
}