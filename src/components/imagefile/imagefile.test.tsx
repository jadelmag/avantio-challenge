import "@testing-library/jest-dom";
import { RenderResult, render, screen } from "@testing-library/react";
import ImageFile from ".";
import Image1 from "../../assets/pngs/01.png";
import Image2 from "../../assets/pngs/02.png";
import { ImageFileProps } from "./imagefile.interface";

describe("Unit Test Textarea", () => {
	const mockImageFile: ImageFileProps = {
		images: [Image1, Image2],
	};

	let component: RenderResult<
		typeof import("@testing-library/dom/types/queries"),
		HTMLElement,
		HTMLElement
	>;
	beforeEach(() => {
		component = render(<ImageFile images={mockImageFile.images} />);
	});

	afterEach(() => {
		component.unmount();
	});

	test("render component without crashing", () => {
		const imagefile = screen.getByRole("listitem");
		expect(imagefile).toBeInTheDocument();
	});

	test("render images", () => {
		const imagefiles = screen.getAllByRole("img");
		const image1 = imagefiles[0];
		expect(image1.getAttribute("src")).toBe("01.png");
		expect(image1.getAttribute("alt")).toBe("Uploaded 0");

		const image2 = imagefiles[1];
		expect(image2.getAttribute("src")).toBe("02.png");
		expect(image2.getAttribute("alt")).toBe("Uploaded 1");
	});
});
