describe('Office of the Mayor', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('mayor_account.json').as('mayor_account')
    })


    it('Mayor must be able to Login in Admin Portal Mayors Office for Release of Permit', function () {
        cy.get('#department-index11').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mayor_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mayor_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        // cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type('1584004772722200')
        cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get('.ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click({
            force: true
        })
        cy.get('.ant-menu-root > :nth-child(8)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })


})