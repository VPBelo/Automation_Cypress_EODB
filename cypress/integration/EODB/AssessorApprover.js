describe('Assessors Approver', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('assessor_account.json').as('assessor_account')
    })

    it('Approver must be able to Login in Admin Portal Assessors Department', function() {
        cy.get('#department-index14').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.assessor_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.assessor_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        // cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type('158488248071984')
        // cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type('158488185946183')
         cy.get('input[placeholder="Input Search Reference Number"]').focus().type(Cypress.env("reference"))
        cy.get('.ant-col-18 > span').click({force: true})
        // cy.get('.ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[aria-selected="false"] > span').click()
        cy.get('.ant-collapse-header').click()
        cy.get('.ant-card-body > :nth-child(1) > [align="right"] > .ant-input').type('Complete')
        cy.get('.ant-card-body > :nth-child(1) > [align="right"] > .ant-btn').click()
        cy.scrollTo('top')
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
            // cy.get('.ant-menu > :nth-child(8)').click().wait(5000)
            // cy.get('.ant-btn-primary').click().wait(5000)

    })


})