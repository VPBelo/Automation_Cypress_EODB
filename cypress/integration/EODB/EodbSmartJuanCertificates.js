describe('SMARTJUAN24-EASE OF DOING BUSINESS', () => {


    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('user_account.json').as('user_account')
    })


    it('Navigate to Dolores Smartjuan24 Certificates', () => {
        cy.visit('https://eodb-qa.ml/app')

    })


    it('User must be able to Login', function() {
        cy.get(':nth-child(6) > a > .ant-btn').click({
            force: true
        })
        cy.get('#login-email').type(this.user_account.username)
            // cy.get('#login-email').type(Cypress.env("username"))
        cy.get('#login-password').type(this.user_account.password)
        cy.get('#login-btn').click().wait(5000)

    })


    /**
     * @description Payment
     * 
     */
    it('Applicant should be able to View Application Status', function() {
        cy.get('#my-application').click({ force: true })
        cy.scrollTo('top')
    })

    it('Applicant should be able to View and Save their Certificates and Permits', function() {
        cy.scrollTo('top')
        cy.get('#my-certificates').click({ force: true }).wait(5000)
            // cy.get(':nth-child(2) > .card_btn > .ant-card-body').click()
            // cy.pause()
            // cy.get(':nth-child(3) > .card_btn > .ant-card-body').click()
            // cy.pause()
            // cy.get(':nth-child(4) > .card_btn > .ant-card-body').click()
            // cy.pause()
            // cy.get(':nth-child(5) > .card_btn > .ant-card-body').click()
            // cy.pause()
            // cy.get(':nth-child(6) > .card_btn > .ant-card-body').click()
            // cy.pause()
            // cy.get(':nth-child(7) > .card_btn > .ant-card-body').click()
        cy.get(':nth-child(5) > span > #v-step-5').click({ force: true })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    })


})