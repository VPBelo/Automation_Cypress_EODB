describe('Office of the Municipal Engineer', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('meo_account.json').as('meo_account')
    })



    it('Approver must be able to Login in Admin Portal MEO Department', function() {
        cy.get('#department-index1').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.meo_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.meo_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get('.ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.get('.ant-card-body > :nth-child(1) > [align="right"] > .ant-input').type('Complete')
        cy.get('.ant-card-body > :nth-child(1) > [align="right"] > .ant-btn').click()
        cy.scrollTo('top')
        cy.get('.ant-checkbox-input').click()
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})