import {IAPIResponseHandler} from "./IAPIResponseHandler";
import {APIGateway} from "./APIGateway";

describe("API Gateway", () => {
    let apiGateway: APIGateway;
    let fetchMock: jest.Mock;
    let apiResponseHandler: IAPIResponseHandler;

    beforeEach(() => {
        apiResponseHandler = {
            HandleResponse: jest.fn()
        } as IAPIResponseHandler;

        fetchMock = jest.fn();
        global.fetch = fetchMock;

        apiGateway = new APIGateway(apiResponseHandler);
    });

    it('should make GET request and handle response', async () => {
        const response = {ok: true, json: () => Promise.resolve({ response: 'data' })};

        fetchMock.mockResolvedValue(response);
        (apiResponseHandler.HandleResponse as jest.Mock).mockResolvedValue({ response: 'data' });

        const path = '/api/test';

        const result = await apiGateway.Get(path);

        expect(result).toEqual({ response: 'data' });
        expect(fetchMock).toBeCalledTimes(1);
        expect(fetchMock).toBeCalledWith(path, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        expect(apiResponseHandler.HandleResponse).toBeCalledTimes(1);
    });
    
    it("On calling Post, makes Post request and calls response handler", async () => {
        const response = {ok: true};

        fetchMock.mockResolvedValue(response);

        const path = '/api/test';
        const requestBody = {
            property1: "hello",
            property2: "world"
        };

        await apiGateway.Post(path, requestBody);

        expect(fetchMock).toBeCalledTimes(1);
        expect(fetchMock).toBeCalledWith(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });
        expect(apiResponseHandler.HandleResponse).toBeCalledTimes(1);
    });
    it("On calling Delete, makes Delete request and calls response handler", async () => {
        const response = {ok: true};

        fetchMock.mockResolvedValue(response);

        const path = '/api/test';
        const requestBody = {
            property1: "hello",
            property2: "world"
        };

        await apiGateway.Delete(path);

        expect(fetchMock).toBeCalledTimes(1);
        expect(fetchMock).toBeCalledWith(path, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        expect(apiResponseHandler.HandleResponse).toBeCalledTimes(1);
    });
});