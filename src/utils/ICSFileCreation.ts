import ical from 'ical-generator';
import { EventList } from './EventList'
import { type ICalCalendar } from 'ical-generator';
import { EventEntry } from './EventEntry';

export function CreateICSFile(eventList: EventList): ICalCalendar {
    const cal = ical();
    if (eventList != null && eventList !== undefined)
        Object.setPrototypeOf(eventList, EventList.prototype)
        for(let i: number = 0; i < eventList?.getEvents().length; i++) {
            
            const event = eventList.getEvents()[i];
            Object.setPrototypeOf(event, EventEntry.prototype)
            const endTime = new Date(event.getDate());
            endTime.setHours(endTime.getHours() + 1);
            cal.createEvent(
                {
                    start: event.getDate(),
                    end: endTime,
                    description: event.getDescription(),
                    summary: event.getName()
                }
            )
        }
        return cal
}