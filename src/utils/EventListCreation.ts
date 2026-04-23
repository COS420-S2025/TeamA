import { EventEntry } from "./EventEntry"
import { EventList } from "./EventList"

export function CreateEventList(dateArr: Date[]): EventList {
    let eventArr: EventEntry[] = [];
    for(let i: number = 0; i < dateArr.length; i++) {
        if (dateArr[i] != null && dateArr[i].getHours() === 12) {
            const event = new EventEntry("Assignment", "Description", dateArr[i]);
            eventArr.push(event);
        }
    }
    const eventList = new EventList(eventArr);
    return eventList;
}