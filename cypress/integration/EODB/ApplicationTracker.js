describe('User Application Tracker', () => {


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
    it('Applicant should be able to View Application Status', function () {
        cy.get('#my-application').click({ force: true })
        cy.scrollTo('top')
    })


})