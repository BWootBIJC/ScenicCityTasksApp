import {render, RenderResult} from "@testing-library/react";
import {Button} from "./Button";

describe("Button", () => {
    let button: RenderResult;
    
    beforeEach(() => {
        button = render(<Button/>);
    });
    
    it("renders to the dom when called", () => {
        expect(button).not.toBeNull();
    })
});