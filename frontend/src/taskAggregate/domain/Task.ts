export class Task {
    id: number;
    title: string;
    description: string;
    
    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    
    public SetTitle(title: string) {
        this.title = title
        return new Task(this.id, this.title, this.description);
    }
    
    public SetDescription(description: string) {
        this.description = description;
        return new Task(this.id, this.title, this.description);
    }
}