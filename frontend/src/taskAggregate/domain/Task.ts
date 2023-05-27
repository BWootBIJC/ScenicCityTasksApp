export class Task {
    id: number;
    title: string;
    description: string;
    
    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.title = name;
        this.description = description;
    }
    
    public SetName(name: string) {
        this.title = name;
        return new Task(this.id, this.title, this.description);
    }
    
    public SetDescription(description: string) {
        this.description = description;
        return new Task(this.id, this.title, this.description);
    }
}