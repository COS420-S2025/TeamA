import { CreateICSFile } from "./ICSFileCreation";
import { CreateEventList } from "./EventListCreation";

test ( 'Creates ICS file from event list', () => {
    const input = [new Date('2024-03-05'), new Date('2024-04-20')];
    const eventList = CreateEventList(input);
    const icsFile = CreateICSFile(eventList);
    expect ( icsFile ).toContain ( 'BEGIN:VCALENDAR' );
    expect ( icsFile ).toContain ( 'END:VCALENDAR' );
    expect ( icsFile ).toContain ( 'BEGIN:VEVENT' );
    expect ( icsFile ).toContain ( 'END:VEVENT' );
});

test ( 'Handles empty event list', () => {
    const eventList = CreateEventList([]);
    const icsFile = CreateICSFile(eventList);
    expect ( icsFile ).toContain ( 'BEGIN:VCALENDAR' );
    expect ( icsFile ).toContain ( 'END:VCALENDAR' );
    expect ( icsFile ).not.toContain ( 'BEGIN:VEVENT' );
    expect ( icsFile ).not.toContain ( 'END:VEVENT' );
});

