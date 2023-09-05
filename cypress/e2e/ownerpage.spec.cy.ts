describe("Owner Page E2E", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
		cy.get("#name").type("Alejandro Garcia Montesinos");
		cy.get("#address").type("Archiduque Carlos 119");
		cy.get("#textarea-description").type(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper, lacus in pretium blandit, sapien tortor congue tortor, vitae fermentum magna sapien at dui. Nunc orci risus, gravida ut condimentum sed, consectetur in elit",
		);
		cy.get("#select-type").select("apartment");
		cy.wait(2000);
		cy.get("#button").click({ force: true });
	});

	it("owner page can be opened", () => {
		cy.contains("Owner");
	});

	it("owner page click button and show errors", () => {
		cy.get("#button").click();
		cy.get("#error-name").contains("Name is required");
		cy.get("#error-email").contains("Email is required");
		cy.get("#button").should("be.disabled");
	});

	it("owner page add all data", () => {
		cy.get("#name").type("Manuel Fernandez Sorli");
		cy.get("#email").type("email@test.com");
		cy.get("#phone").type("616584785");
		cy.get("#button").should("not.be.disabled");
		cy.wait(2000);
		cy.get("#button").click();
	});
});
