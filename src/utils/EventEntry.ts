//File that handles event entry
//EventEntry object to store the different events and their corresponding functions

export class EventEntry {
    public name: string;
    public description: string;
    public date: Date;
    public tags: Set<string>;

    //getters for EventEntry variables
    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getDate(): Date {
        return this.date;
    }

    getTags(): Set<string> {
        return this.tags;
    }

    constructor ( name: string, description: string, date: Date ) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.tags = new Set<string>();
    }

    //setters for EventEntry variables
    setName(name: string): void {
        this.name = name;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setDate(date: Date): void {
        this.date = date;
    }

    setTags(tags: Set<string>): void {
        this.tags = tags;
    }

    addTag ( tag: string ): void { //function to add a tag to the event
        this.tags.add ( tag );
    }

    removeTag ( tag: string ) { //function to remove a tag from the event
        this.tags.delete ( tag );
    }

    toJSON() {
        let strArr: string[] = Array.from(this.tags);
        return {
            name: this.name,
            description: this.description,
            date: this.date.toDateString(),
            tags: strArr
        }
    }

}
