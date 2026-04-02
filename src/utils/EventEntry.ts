//File that handles event entry
//EventEntry object to store the different events and their corresponding functions

export class EventEntry {
    private name: String;
    private description: String;
    private date: Date;
    private tags: Set<String>;

    //getters for EventEntry variables
    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getDate() {
        return this.date;
    }

    getTags() {
        return this.tags;
    }

    constructor ( name: String, description: String, date: Date ) {
        this.name = name;
        this.description = description;
        this.date = date;
    }

    //setters for EventEntry variables
    setName(name: String) {
        this.name = name;
    }

    setDescription(description: String) {
        this.description = description;
    }

    setDate(date: Date) {
        this.date = date;
    }

    setTags(tags: Set<String>) {
        this.tags = tags;
    }

    addTag ( tag: String ) { //function to add a tag to the event
        this.tags.add ( tag );
    }

    removeTag ( tag: String ) { //function to remove a tag from the event
        this.tags.delete ( tag );
    }

}