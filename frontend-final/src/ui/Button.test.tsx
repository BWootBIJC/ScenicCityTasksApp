import {render, screen, RenderResult} from "@testing-library/react";
import {Button} from "./Button";

describe("Button", () => {
    let button: RenderResult;

    beforeEach(() => {
        button = render(<Button
            onClick={jest.fn()}
            buttonText="button text"
            dataTestId="button"
        />);
    });

    it("renders to the dom when called", () => {
        expect(button).not.toBeNull();
    });

    it("Has button text", () => {
        const text = screen.getByText("button text");
        expect(text).toBeInTheDocument();
    });
});