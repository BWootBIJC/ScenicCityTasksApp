import {render, screen, RenderResult} from "@testing-library/react";
import React from "react";
import {Input} from "./Input";

describe("Input", () => {
    let input: RenderResult;

    beforeEach(() => {
        input = render(
            <Input
                dataTestId="input"
                placeholderText="placeholder"
            />
        );
    });
    
    it("renders to the dom", () => {
        expect(input).not.toBeNull();
    });
    it("has placeholder text", () => {
        const placeholder = screen.getByPlaceholderText("placeholder");
        expect(placeholder).toBeInTheDocument();
    })
});