import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import SummaryPage from "../../pages/SummaryPage";
import { store } from "../../store";

describe("Unit Test SummaryPage", () => {
	test("render component without crashing", async () => {
		act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<SummaryPage />
					</BrowserRouter>
				</Provider>,
			);
		});
		const title = screen.getByRole("heading", {
			level: 1,
			name: "Owner",
		});
		expect(title).toBeInTheDocument();
	});

	test("render all h6 with their values", async () => {
		act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<SummaryPage />
					</BrowserRouter>
				</Provider>,
			);
		});
		const headings = screen.getAllByRole("heading", { level: 6 });
		expect(headings.length).toBe(7);
		expect(headings[0].innerHTML).toBe("Name:");
		expect(headings[1].innerHTML).toBe("Address:");
		expect(headings[2].innerHTML).toBe("Description:");
		expect(headings[3].innerHTML).toBe("Type:");
		expect(headings[4].innerHTML).toBe("Name:");
		expect(headings[5].innerHTML).toBe("Email:");
		expect(headings[6].innerHTML).toBe("Phone:");
	});

	test("render button", async () => {
		act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<SummaryPage />
					</BrowserRouter>
				</Provider>,
			);
		});
		const button = screen.getByRole("button", { name: "Submit" });
		expect(button).toBeInTheDocument();
		expect(button.innerHTML).toBe("Submit");
		expect(button.getAttribute("type")).toBe("submit");
	});
});
