export class TaskCard {
    private _id: number;
    private _title: string;
    private _description: string;
    private _isLoading: boolean;
    
    constructor(id: number, title: string, description: string, isLoading: boolean = false) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._isLoading = isLoading;
    }
    
    private clone() {
        return new TaskCard(this._id, this._title, this._description, this._isLoading);
    }
    
    public emptyFields() {
        return new TaskCard(0, "", "");
    }
    
    public setTitle(title: string) {
        const result = this.clone();
        result._title = title;
        return result;
    }
    
    public setDescription(description: string) {
        const result = this.clone();
        result._description = description;
        return result;
    }
    
    public setIsLoading(isLoading: boolean) {
        const result = this.clone();
        result._isLoading = isLoading;
        return result;
    }


    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }
    
    get isLoading(): boolean {
        return this._isLoading;
    }
}