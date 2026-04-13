import { CreateICSFile } from "./ICSFileCreation";
import { CreateEventList } from "./EventListCreation";

test ( 'Creates ICS file from event list', () => {
    const date1 = new Date('2024-03-05');
    date1.setHours(12, 0, 0, 0);
    const date2 = new Date('2024-04-20');
    date2.setHours(12, 0, 0, 0);
    const input = [date1, date2];
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

