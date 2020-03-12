describe('SmartJuan24 Login User Account', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
      })


    it('User must be able to Login', function() {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type(this.user_account.username)
        // cy.get('#login-email').type(Cypress.env("username"))
        cy.get('#login-password').type(this.user_account.password)
        cy.get('#login-btn').click().wait(5000)
        cy.scrollTo('top')

    })



})