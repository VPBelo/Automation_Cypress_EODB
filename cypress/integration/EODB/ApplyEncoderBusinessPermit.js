describe('System Administrators', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('administrator_account.json').as('administrator_account')
        cy.fixture('application_details.json').as('application_details')
    })

    it('Admin must be able to Login in Admin Portal Administrator Department', function() {
        cy.get('#department-index12').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.administrator_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.administrator_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5) > span').click({
            force: true
        })
        cy.get('.ant-col-18 > :nth-child(1) > .ant-btn').click({
            force: true
        })
        cy.get('[style="margin-left: -8px; margin-right: -8px;"] > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('VINCE')
        cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('BELO')
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('vbelo@centralizedinc.com')
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.get(':nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('.ant-btn-primary').click()
            // cy.get('.ant-menu > :nth-child(8)').click().wait(5000)
            // cy.get('.ant-btn-primary').click().wait(5000)

    })

    // it('Walkin Applicant must be able to Apply for New Business Permit', function() {

    // })


})