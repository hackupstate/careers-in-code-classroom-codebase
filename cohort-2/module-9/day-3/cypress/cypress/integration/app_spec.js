describe('App', () => {
    describe('with successful server response', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.intercept("api/v1/users/checkPassword", {fixture: 'api-success-response'})
            cy.intercept("api/v1/users/checkUsername", {fixture: 'api-success-response'})
        })

        it('accepts strong username / password', () => {


            cy.get("[data-cy=username]").type("asdvas")
            cy.get("[data-cy=password]").type("12nk12nk1jnl13kjlkj")
            cy.get("[data-cy=submit]").click()
            cy.get("[data-cy=valid-message]")
        })

        it('rejects reserved username', () => {


            cy.get("[data-cy=username]").type("admin")
            cy.get("[data-cy=password]").type("12nk12nk1jnl13kjlkj")
            cy.get("[data-cy=submit]").click()
            cy.get("[data-cy=invalid-message]")
        })

        it('rejects weak password', () => {
            cy.get("[data-cy=username]").type("asdvas")
            cy.get("[data-cy=password]").type("password")
            cy.get("[data-cy=submit]").click()
            cy.get("[data-cy=invalid-message]")
        })
    });

    describe('with unsuccessful server response', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.intercept("api/v1/users/checkPassword", {fixture: 'api-failure-response'})
            cy.intercept("api/v1/users/checkUsername", {fixture: 'api-failure-response'})
        })

        it('rejects strong username / password', () => {
            cy.get("[data-cy=username]").type("asdvas")
            cy.get("[data-cy=password]").type("12nk12nk1jnl13kjlkj")
            cy.get("[data-cy=submit]").click()
            cy.get("[data-cy=invalid-message]")
        })
    });
})
