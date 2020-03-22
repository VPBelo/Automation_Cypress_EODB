describe('User Report Incident', () => {


    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
    })


    /**
     * @description Report Incident
     * 
     */
    it('Applicant should be able to Report Incident', function() {
        cy.scrollTo('top')
        cy.get(':nth-child(4) > .emergency_btn > .ant-card-body').click({
            force: true
        })
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').focus().type('Flood incident report')
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').focus().type('Bungoy')
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').focus().type('09124578963')
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get(':nth-child(5) > span > #v-step-5').click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    })


})