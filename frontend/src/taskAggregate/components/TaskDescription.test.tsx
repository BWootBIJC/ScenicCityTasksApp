import {render, screen, RenderResult} from "@testing-library/react";
import {TaskDescription} from "./TaskDescription";

describe("TaskDescription", () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<TaskDescription
            title="title"
            description="description"
            dataTestId={"test"}
        />);
    });

    it("Should render when called", () => {
        expect(component).not.toBeNull();
    });
    it("It renders a title", () => {
        const title = screen.getByText("title");
        expect(title).toBeInTheDocument();
    });
    it("It renders a paragraph description", () => {
        const description = screen.getByText("description");
        expect(description).toBeInTheDocument();
    });
});