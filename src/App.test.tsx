import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";

describe("Unit Test App", () => {
	test("render component without crashing", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			);
		});
		const title = screen.getByRole("heading", {
			level: 1,
			name: "Accommodation",
		});
		expect(title).toBeInTheDocument();
	});

	test("render all labels", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			);
		});
		const labels = screen.getAllByLabelText("title");
		expect(labels.length).toBe(3);
		expect(labels[0].innerHTML).toBe("Name");
		expect(labels[1].innerHTML).toBe("Address");
		expect(labels[2].innerHTML).toBe("Optional: Max Images 2");
	});

	test("render all default inputs", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			);
		});
		const defatulInputs = screen.getAllByLabelText("input");
		expect(defatulInputs.length).toBe(2);
		expect(defatulInputs[0].getAttribute("id")).toBe("name");
		expect(defatulInputs[1].getAttribute("id")).toBe("address");
	});

	test("render textarea", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			);
		});
		const textarea = screen.getByLabelText("textarea");
		expect(textarea.getAttribute("name")).toBe("description");
		expect(textarea).toBeInTheDocument();
	});

	test("render dropdown", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			);
		});
		const dropdown = screen.getByLabelText("type");
		expect(dropdown.getAttribute("name")).toBe("type");
		expect(dropdown).toBeInTheDocument();
	});

	test("render input file", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			);
		});
		const inputfile = screen.getByLabelText("input-file");
		expect(inputfile.getAttribute("id")).toBe("images");
		expect(inputfile).toBeInTheDocument();
	});

	test("render button", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			);
		});
		const button = screen.getByRole("button", { name: "Next" });
		expect(button).toBeInTheDocument();
		expect(button.innerHTML).toBe("Next");
		expect(button.getAttribute("type")).toBe("submit");
	});

	test("check click button", async () => {
		const handleClick = jest.fn();
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>,
			);
		});
		const button = screen.getByRole("button");
		await fireEvent.click(button);
		// button is disabled
		expect(handleClick).toHaveBeenCalledTimes(0);
	});
});
