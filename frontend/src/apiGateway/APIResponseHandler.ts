import {IAPIResponseHandler} from "./IAPIResponseHandler";

export class APIResponseHandler implements IAPIResponseHandler {
    public async HandleResponse(response: any) {
        if (!response.ok) {
            return await response.json()
                .then((x: any) => Promise.reject(x));
        }
        const result = await response.json();
        return result;
    }
}