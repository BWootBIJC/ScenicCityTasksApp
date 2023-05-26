import {screen, render, RenderResult} from "@testing-library/react";
import {TextArea} from "./TextArea";

describe("Text Area", () => {
    let textArea: RenderResult;
    
    beforeEach(() => {
        textArea = render(<TextArea
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
});