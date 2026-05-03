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

    public events: EventEntry[];

    constructor(events: EventEntry[]) {
        this.events = events;
    }

    //function to add an event to the list
    addEvent ( event: EventEntry ): string {
        this.events.push ( event );
        return "Event: " + event.getName() + " Added";

    }

    //function to remove an event from the list
    removeEvent ( event: EventEntry ): string {
        const index = this.events.indexOf(event);
        
        if (index === -1) {
            return "Error: Event not found"
        }
        
        this.events.splice(index, 1);
        
        return "Event: " + event.getName() + " Removed";
    }

    getEvents(): EventEntry[] {
        return this.events;
    }

    setEventEntryPrototype(): void {
        for (let i = 0; i < this.events.length; i++) {
            Object.setPrototypeOf(this.events[i], EventEntry.prototype)
        }
    }

}
