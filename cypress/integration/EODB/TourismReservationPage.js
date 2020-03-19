describe('User Reservation in Tourism Portal', () => {


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
    it('Applicant should be able to Booking in Tourism Page', function() {
        cy.get('#my-application').click({
            force: true
        })
        cy.scrollTo('top')
        cy.get(':nth-child(5) > span > #v-step-5').click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    })


})