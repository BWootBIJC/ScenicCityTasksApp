import {IAPIGateway} from "./IAPIGateway";
import {IAPIResponseHandler} from "./IAPIResponseHandler";


export class APIGateway implements IAPIGateway {
    private readonly apiResponseHandler: IAPIResponseHandler;
    constructor(apiResponseHandler: IAPIResponseHandler) {
        this.apiResponseHandler = apiResponseHandler;
    }
    public async Get<T>(path: string): Promise<T> {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        return fetch(path, requestOptions)
            .then((response) => this.apiResponseHandler.HandleResponse(response))
            .then(data => data as T);
    }
    
    public async Post<T>(path: string, requestBody: T): Promise<void> {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        };
        
        return fetch(path, requestOptions)
            .then(response => this.apiResponseHandler.HandleResponse(response))
            .then(data => data as void);
    }
    
    public async Delete<T>(path: string, requestBody: T): Promise<void> {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody),
        };
        
        return fetch(path, requestOptions)
            .then(response => this.apiResponseHandler.HandleResponse(response))
            .then(data => data as void)
    }
}