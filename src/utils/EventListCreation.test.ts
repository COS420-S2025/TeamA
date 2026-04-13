import { CreateEventList } from './EventListCreation';

test ( 'Creates event list from input', () => {
    const input = [new Date('2024-03-05'), new Date('2024-04-20')];
    const eventList = CreateEventList(input);

    expect ( eventList.getEvents().length ).toBe ( 2 );
    expect ( eventList.getEvents()[0].getName() ).toBe ( 'Assignment' );
    expect ( eventList.getEvents()[1].getName() ).toBe ( 'Assignment' );
});

test ( 'Handles empty input', () => {
    const eventList = CreateEventList([]);
    expect ( eventList.getEvents().length ).toBe ( 0 );
});

test ( 'Creates events with correct properties', () => {
    const input = new Date('2024-03-05');
    const eventList = CreateEventList([input]);

    const event = eventList.getEvents()[0];
    expect ( event.getName() ).toBe ( 'Assignment' );
    expect ( event.getDescription() ).toBe ( 'Description' );
    expect ( event.getDate() ).toBe ( input );

});