describe('Bureau of Fire Protection', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('bfp_account.json').as('bfp_account')
    })


    it('Approver must be able to Login in Admin Portal BFP Department for Inspection', function () {
        cy.get('#department-index10').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.bfp_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.bfp_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get('.ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click(5000)
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get('.ant-col-8 > .ant-btn').click()
        cy.get('[title="March 20, 2020"] > .ant-fullcalendar-date > .ant-fullcalendar-value').click({ force: true })
        cy.get('.ant-modal-footer > .ant-btn-group > :nth-child(2)').click()
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-col-16 > .ant-btn-group > .ant-btn-primary').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})