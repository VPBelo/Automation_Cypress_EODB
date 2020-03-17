describe('User Payment in Cashier', () => {


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
    it('Applicant should be able to Pay in Cashier (Municipal Hall)', function() {
        cy.scrollTo('top')
        cy.get('#my-application').click({
            force: true
        })
        cy.get('.v-step__button-skip').click()
            // cy.get('input[placeholder="Input Search Reference Number"]').type(Cypress.env("reference"))
            // cy.get('input[placeholder="Input Search Reference Number"]').focus().type('1584087656742344')
        cy.get('input[placeholder="Input Search Reference Number"]').focus().type(Cypress.env("reference"))
        cy.pause()
        cy.get(':nth-child(3) > .ant-badge > .ant-card > .ant-card-actions > :nth-child(3) > span > .anticon > svg').click({
            force: true
        })
        cy.get('[aria-disabled="false"][aria-selected="false"] > .anticon > svg').click({
            force: true
        }).wait(1000)
        cy.get('.ant-card-body > .ant-btn').click({
            force: true
        })
        cy.get(':nth-child(5) > span > #v-step-5').wait(1000).click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(2000)
    })


})