import {screen, render, RenderResult} from "@testing-library/react";
import {TextArea} from "./TextArea";

describe("Text Area", () => {
    let textArea: RenderResult;
    
    beforeEach(() => {
        textArea = render(<TextArea
            onChange={jest.fn()}
            value="value"
            placeholderText="textArea"
            dataTestId="textArea"
        />);
    });
    
    it("Renders to the dom", () => {
        expect(textArea).not.toBeNull();
    });
    
    it("has placeholder text", () => {
        const placeHolderText = screen.getByPlaceholderText("textArea");
        expect(placeHolderText).toBeInTheDocument();
    });
    it("has an initial value", () => {
        const initialValue = screen.getByText("value");
        expect(initialValue).toBeInTheDocument();
    });
});