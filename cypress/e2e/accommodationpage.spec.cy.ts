describe("Accommodation Page E2E", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("home page can be opened", () => {
		cy.contains("Accommodation");
	});

	it("home page click button and show errors", () => {
		cy.get("#button").click();
		cy.get("#error-name").contains("Name is required");
		cy.get("#error-address").contains("Address is required");
		cy.get("#button").should("be.disabled");
	});

	it("home page add all data", () => {
		cy.get("#name").type("Alejandro Garcia Montesinos");
		cy.get("#address").type("Archiduque Carlos 119");
		cy.get("#textarea-description").type(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper, lacus in pretium blandit, sapien tortor congue tortor, vitae fermentum magna sapien at dui. Nunc orci risus, gravida ut condimentum sed, consectetur in elit",
		);
		cy.get("#select-type").select("apartment");
		cy.wait(2000);
		cy.get("#button").click({ force: true });
	});
});
