import {IAPIResponseHandler} from "./IAPIResponseHandler";

export class APIResponseHandler implements IAPIResponseHandler {
    public async HandleResponse(response: any) {
        if (!response.ok) {
            return await response.json()
                .then((x: any) => Promise.reject(x));
        }
        if(response.status === 204) {
            return Promise.resolve(null);
        }
        return await response.json();
    }
}