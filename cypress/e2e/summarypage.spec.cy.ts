describe("Owner Page E2E", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
		cy.get("#name").type("Alejandro Garcia Montesinos");
		cy.get("#address").type("Archiduque Carlos 119");
		cy.get("#textarea-description").type(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper, vitae fermentum magna sapien at dui.",
		);
		cy.get("#select-type").select("apartment");
		cy.wait(2000);
		cy.get("#button").click({ force: true });

		cy.get("#name").type("Manuel Fernandez Sorli");
		cy.get("#email").type("email@test.com");
		cy.get("#phone").type("616584785");
		cy.get("#button").should("not.be.disabled");
		cy.get("#button").click();
	});

	it("summary page can be opened", () => {
		cy.contains("Accommodation");
		cy.get(":nth-child(2) > #name-paragraph").contains(
			"Alejandro Garcia Montesinos",
		);
		cy.get("#address-paragraph").contains("Archiduque Carlos 119");
		cy.get("#description-paragraph").contains(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper, vitae fermentum magna sapien at dui.",
		);
		cy.get("#type-paragraph").contains("apartment");

		cy.contains("Owner");

		cy.get(":nth-child(8) > #name-paragraph").contains(
			"Manuel Fernandez Sorli",
		);
		cy.get("#email-paragraph").contains("email@test.com");
		cy.get("#phone-paragraph").contains("616584785");
		cy.get("#button").click();
	});
});
