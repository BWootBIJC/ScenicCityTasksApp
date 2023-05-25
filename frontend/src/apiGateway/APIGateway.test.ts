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
        expect(apiResponseHandler.HandleResponse).toBeCalledTimes(1);
    });
});