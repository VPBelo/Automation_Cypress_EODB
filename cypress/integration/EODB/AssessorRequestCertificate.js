describe('User Assessors Request Portal', () => {


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
    it('Applicant should be able to Request for RPT', function() {
        cy.scrollTo('top')
        cy.get('.ant-menu-item-selected').click()
        cy.get('.v-step__button-skip').click({
            delay: 100
        })
        cy.get('#v-step-2 > :nth-child(5)').click({
            force: true
        })
        cy.scrollTo('top').wait(2000)
        cy.get('.ant-col-xs-24 > .ant-row-flex-center > :nth-child(3)').click().wait(5000)
        cy.get(':nth-child(1) > .form-label > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('CERTIFIED TRUE COPY OF TAX DECLARATION').click();
        cy.get(':nth-child(2) > .form-label > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('33445412122C').click();
        cy.get('.ant-btn-group > .ant-btn-primary').click()
        cy.get('[align="end"] > .ant-btn').click({ force: true })
        cy.get('#my-application').click({ force: true })
        cy.scrollTo('top')
        cy.get(':nth-child(5) > span > #v-step-5').click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    })


})