import {IAPIGateway} from "./IAPIGateway.ts";
import {IAPIResponseHandler} from "./IAPIResponseHandler.ts";

export class APIGateway implements IAPIGateway {
    private readonly apiResponseHandler: IAPIResponseHandler;
    constructor(apiResponseHandler: IAPIResponseHandler) {
        this.apiResponseHandler = apiResponseHandler;
    }
    public async Get<T>(path: string): Promise<T> {
        const requestOptions = {
            method: "GET",
            "Content-Type": "application/json"
        };
        
        return fetch(path, requestOptions)
            .then(this.apiResponseHandler.HandleResponse)
            .then(data => data);
    }
}