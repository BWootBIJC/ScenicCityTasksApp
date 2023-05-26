export class Task {
    id: number;
    name: string;
    description: string;
    
    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    
    public SetName(name: string) {
        this.name = name;
        return new Task(this.id, this.name, this.description);
    }
    
    public SetDescription(description: string) {
        this.description = description;
        return new Task(this.id, this.name, this.description);
    }
}