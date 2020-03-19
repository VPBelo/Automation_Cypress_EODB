describe('User Certificates and Permits', () => {


    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
    })


    /**
     * @description Payment
     * 
     */
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