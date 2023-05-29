export class Task {
    id: number;
    title: string;
    description: string;
    
    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    
    public EmptyFields() {
        return new Task(0, "", "");
    }
    
    public SetTitle(title: string) {
        return new Task(this.id, title, this.description);
    }
    
    public SetDescription(description: string) {
        return new Task(this.id, this.title, description);
    }
}