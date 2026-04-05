import ical from 'ical-generator';
import { EventList } from './EventList'
import { type ICalCalendar } from 'ical-generator';

export function CreateICSFile(eventList: EventList): ICalCalendar {
    const cal = ical();
    for(let i: number = 0; i < eventList.events.length; i++) {

        const event = eventList.events[i];
        const endTime = new Date(event.date);
        endTime.setHours(endTime.getHours() + 1);

        cal.createEvent(
            {
                start: event.date,
                end: endTime,
                description: event.description,
                summary: event.name
            }
        )
    }
    return cal
}