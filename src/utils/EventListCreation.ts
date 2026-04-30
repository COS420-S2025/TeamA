import { EventEntry } from "./EventEntry"
import { EventList } from "./EventList"
import { inferTagsFromText } from "./EventTagging";

type ParsedEventInput = Date | { date: Date; context: string };

export function CreateEventList(dateArr: ParsedEventInput[]): EventList {
    let eventArr: EventEntry[] = [];
    for(let i: number = 0; i < dateArr.length; i++) {
        const input = dateArr[i];
        const date = input instanceof Date ? input : input.date;
        const context = input instanceof Date ? "" : input.context;
        if (date != null && date.getHours() === 12) {
            const inferredTags = inferTagsFromText(context);
            const defaultName = inferredTags.has("exam") ? "Exam" : "Assignment";
            const event = new EventEntry(defaultName, "Description", date);
            event.setTags(inferredTags);
            eventArr.push(event);
        }
    }
    const eventList = new EventList(eventArr);
    return eventList;
}