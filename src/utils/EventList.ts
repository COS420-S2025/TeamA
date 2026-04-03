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

    private events: Array<EventEntry>;

    constructor() {
        this.events = [];
    }

    //function to add an event to the list
    addData ( event: EventEntry ) {

        event = new EventEntry ( event.getName(), event.getDescription(), event.getDate() );
        this.events.push ( event );

        return "Event: " + event.getName() + " Added";

    }

    //function to remove an event from the list
    removeData ( index: number ) {
        
        for ( let i: number = 0; i < this.events.length; i++ ) {
            if ( i === index ) {
                this.events.splice ( i, 1 );
                return "Event: " + this.events[i].getName() + " Removed";
            }
        }
        return "Error: Event Not Found";
    }

    //function to export the events as an ICS file
    exportAsICS() { //function to export the events as an ICS file
        return 0;
    }

}