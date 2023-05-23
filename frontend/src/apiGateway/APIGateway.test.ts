import {APIGateway} from "./APIGateway.ts";
import {It, Mock, Times} from "moq.ts";
import {IAPIResponseHandler} from "./IAPIResponseHandler.ts";

describe("API Gateway", () => {
    let apiGateway: APIGateway;
    let fetchMock: Mock<typeof fetch>;
    let apiResponseHandlerMock: Mock<IAPIResponseHandler>;
    let responseMock: Mock<Response>;
    
    beforeEach(() => {
        fetchMock = new Mock<typeof fetch>();
        apiResponseHandlerMock = new Mock<IAPIResponseHandler>();
        responseMock = new Mock<Response>();

        apiResponseHandlerMock.setup(x => x.HandleResponse(It.IsAny()))
            .returns(async (response: Response) => response.json());

        global.fetch = fetchMock.object();

        apiGateway = new APIGateway(apiResponseHandlerMock.object());
    });
    it('should make GET request and handle response', async () => {
        responseMock.setup(x => x.ok).returns(true);
        responseMock.setup(x => x.json()).returns(Promise.resolve({ response: 'data' }));
        fetchMock.setup(x => x(It.IsAny(), It.IsAny()))
            .returns(Promise.resolve(responseMock.object()));

        const path = '/api/test';

        // const result = await apiGateway.Get(path);

        // expect(result).toEqual({ response: 'data' });
        fetchMock.verify(x => x(path, It.IsAny<RequestInit>()), Times.Once());
        apiResponseHandlerMock.verify(instance => instance.HandleResponse(responseMock.object()), Times.Once());
    });
})