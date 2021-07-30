describe("Nathans web store", () => {
    it("should add some items to the cart", () => {
        cy.visit("https://google.com")
        cy.get("[name=q]").type("Cat pictures").type("{enter}")
    })
})