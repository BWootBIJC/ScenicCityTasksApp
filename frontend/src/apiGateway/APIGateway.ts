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
            "Content-Type": "application/json"
        };
        
        return fetch(path, requestOptions)
            .then((response) => this.apiResponseHandler.HandleResponse(response))
            .then(data => data as T);
    }
}