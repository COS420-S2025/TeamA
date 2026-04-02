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
        return 0;
    }

    //function to remove an event from the list
    removeData ( index: number ) {
        return 0;
    }

    //function to export the events as an ICS file
    exportAsICS() { //function to export the events as an ICS file
        return 0;
    }

}