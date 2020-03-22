describe('User Payment', () => {


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
    it('Applicant should be able to Pay in Credit Card Transactions', function() {
        cy.scrollTo('top')
        cy.get('#my-application').click({ force: true })
        // cy.get('.v-step__button-skip').click()
        cy.pause()
        cy.get('input[placeholder="Input Search Reference Number"]').focus().type(Cypress.env("reference"))
        // cy.get('input[placeholder="Input Search Reference Number"]').focus().type('158480582472379')
        cy.get('.ant-card-actions > :nth-child(3) > span > .anticon').click({ force: true })
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control').type('4111111111111111', { delay: 100 })
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control').type('Vince Belo', { delay: 100 })
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control').type('12/22', { delay: 100 })
        cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('232', { delay: 100 })
        cy.get('form > :nth-child(1) > :nth-child(1)').click().wait(5000)
        cy.get('.ant-card-body > .ant-btn').click().wait(5000)
        cy.get(':nth-child(5) > span > #v-step-5').click({ force: true })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    })


})