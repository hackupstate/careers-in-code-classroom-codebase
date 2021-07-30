describe("Password Validator", () => {
    it("checks for a short password", () => {
        cy.visit("http://localhost:3000");
        cy.get("#password").type("asd")
        cy.get("[data-cy=login]").click()

        cy.get("[data-cy=invalid-password]")
    })

    it("checks for a valid password", () => {
        cy.visit("http://localhost:3000");
        cy.get("#password").type("asdjklasfjlk$")
        cy.get("[data-cy=login]").click()

        cy.get("[data-cy=valid-password]")
    })
})