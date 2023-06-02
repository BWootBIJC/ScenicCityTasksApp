import {APIResponseHandler} from "./APIResponseHandler.ts";
import {Mock, Times} from "moq.ts";

describe("APIResponseHandler", () => {
    let handler: APIResponseHandler;
    let responseMock: Mock<{ok: boolean, json: () => Promise<any>}>;
    
    beforeEach(() => {
        handler = new APIResponseHandler();
        responseMock = new Mock<{ok: boolean; json: () => Promise<any>}>();
    });
    
    it("Rejects with response JSON when response is not ok", async () => {
        responseMock.setup(x => x.ok)
            .returns(false);
        responseMock.setup(x => x.json())
            .returns(Promise.resolve('error message'))

        await expect(handler.HandleResponse(responseMock.object())).rejects.toEqual('error message');
        responseMock.verify(x => x.json(), Times.Once());
    });
    
    it("Returns response JSON when response is ok", async () => {
        const responseJson = { message: 'success' };
        responseMock.setup(x => x.ok)
            .returns(true);
        responseMock.setup(x => x.json())
            .returns(Promise.resolve(responseJson));
        
        const result = await handler.HandleResponse(responseMock.object());
        expect(result).toEqual(responseJson);
        responseMock.verify(x => x.json(), Times.Once());
    })
});