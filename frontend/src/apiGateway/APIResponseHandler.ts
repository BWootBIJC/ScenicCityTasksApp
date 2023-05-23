import {IAPIResponseHandler} from "./IAPIResponseHandler.ts";

export class APIResponseHandler implements IAPIResponseHandler {
    public async HandleResponse(response: any) {
        if (!response.ok) {
            return await response.json()
                .then((x: any) => Promise.reject(x));
        }
        return response.json();
    }
}