describe('Office of the Municipal Treasurer', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('mto_account.json').as('mto_account')
    })


    it('Approver must be able to Login in Admin Portal MTO Department', function() {
        cy.get('#department-index2').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mto_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mto_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.pause()
            // cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
            // cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type('1584077237396272')
        cy.get('.ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.get('.ant-card-head-title > .ant-row > [align="right"] > .ant-btn').click()
        cy.get('.ant-modal-close-icon > svg > path').click({
            force: true
        })
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click().wait(5000)
        cy.get('.ant-card-body > :nth-child(1) > [align="right"] > .ant-input').type('Complete')
        cy.get('.ant-card-body > :nth-child(1) > [align="right"] > .ant-btn').click()
        cy.scrollTo('top')
            // cy.get('.ant-checkbox-input').click()
            // cy.get('.ant-card-body > .ant-input').type('Approved')
            // cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
            // cy.get('.ant-popover-buttons > .ant-btn-primary').click()
            // cy.get('.ant-menu > :nth-child(6)').click().wait(5000)
            // cy.get('.ant-btn-primary').click().wait(5000)
    })


})