import { CreateICSFile } from "./ICSFileCreation";
import { CreateEventList } from "./EventListCreation";

test ( 'Creates ICS file from event list', () => {
    const input = [new Date('2024-03-05'), new Date('2024-04-20')];
    const eventList = CreateEventList(input);
    const icsFile = CreateICSFile(eventList);
    expect ( icsFile.toString() ).toContain ( 'BEGIN:VCALENDAR' );
    expect ( icsFile.toString() ).toContain ( 'END:VCALENDAR' );
    expect ( icsFile.toString() ).toContain ( 'BEGIN:VEVENT' );
    expect ( icsFile.toString() ).toContain ( 'END:VEVENT' );
});

test ( 'Handles empty event list', () => {
    const eventList = CreateEventList([]);
    const icsFile = CreateICSFile(eventList);
    expect ( icsFile.toString() ).toContain ( 'BEGIN:VCALENDAR' );
    expect ( icsFile.toString() ).toContain ( 'END:VCALENDAR' );
    expect ( icsFile.toString() ).not.toContain ( 'BEGIN:VEVENT' );
    expect ( icsFile.toString() ).not.toContain ( 'END:VEVENT' );
});

