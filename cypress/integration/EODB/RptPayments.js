describe('SmartJuan24 User Portal', () => {


    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
        cy.fixture('application_details.json').as('application_details')
    })


    /** 
     * @description Payment
     * 
     */
    it('Applicant should be able to Pay for your Real Property Tax', function() {
        cy.scrollTo('top')
        cy.get('.v-step__button-skip').click()
        cy.get('#v-step-2 > :nth-child(5) > span').click({
            force: true
        })
        cy.get(':nth-child(2) > .card_btn > .ant-card-head').click()
        cy.get('.ant-input-group > .ant-input').type('254121A0211')
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Belo')
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Vince')
        cy.get('.ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains(this.application_details.barangay_desc).click();
        cy.get('.ant-btn-group > .ant-btn-primary').click()
            // cy.get('.ant-modal-close-icon > svg').click()
        cy.get(':nth-child(5) > span > #v-step-5').click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    })


})