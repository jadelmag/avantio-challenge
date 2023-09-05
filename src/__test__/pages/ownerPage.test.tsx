import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import OwnerPage from "../../pages/OwnerPage";
import { store } from "../../store";

describe("Unit Test OwnerPage", () => {
	test("render component without crashing", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<OwnerPage />
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

	test("render all labels", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<OwnerPage />
					</BrowserRouter>
				</Provider>,
			);
		});
		const labels = screen.getAllByLabelText("title");
		expect(labels.length).toBe(3);
		expect(labels[0].innerHTML).toBe("Name");
		expect(labels[1].innerHTML).toBe("Email");
		expect(labels[2].innerHTML).toBe("Phone");
	});

	test("render all default inputs", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<OwnerPage />
					</BrowserRouter>
				</Provider>,
			);
		});
		const defatulInputs = screen.getAllByLabelText("input");
		expect(defatulInputs.length).toBe(3);
		expect(defatulInputs[0].getAttribute("id")).toBe("name");
		expect(defatulInputs[1].getAttribute("id")).toBe("email");
		expect(defatulInputs[2].getAttribute("id")).toBe("phone");
	});

	test("render button", async () => {
		await act(() => {
			render(
				<Provider store={store}>
					<BrowserRouter>
						<OwnerPage />
					</BrowserRouter>
				</Provider>,
			);
		});
		const button = screen.getByRole("button", { name: "Next" });
		expect(button).toBeInTheDocument();
		expect(button.innerHTML).toBe("Next");
		expect(button.getAttribute("type")).toBe("submit");
	});
});
