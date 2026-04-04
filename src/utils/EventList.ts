//File containing the functions to manage the different events
//within the application. 

import { EventEntry } from "./EventEntry";

//EventList object to store the different events and their corresponding functions

//events:
//List<EventEntry>

//addDate()

//removeDate ( int index )

//exportAsICS()

export class EventList {

    private events: EventEntry[];

    constructor() {
        this.events = [];
    }

    //function to add an event to the list
    addEvent ( event: EventEntry ): string {
        this.events.push ( event );
        return "Event: " + event.getName() + " Added";

    }

    //function to remove an event from the list
    removeEvent ( index: number ): string {
        if (index < 0 || index >= this.event.length) {
            return "Error: Event Not Found";
        }
        
        const removedEvent = this.events[index];
        this.events.splice(index, 1);
        
        return "Event: " + removedEvent.getName() + " Removed";
    }

    getEvents(): EventEntry[] {
        return this.events;
    }

    //function to export the events as an ICS file
    exportAsICS() { //function to export the events as an ICS file
        return 0;
    }

}
