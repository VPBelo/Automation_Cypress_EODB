describe('Office of the Barangay Chairman', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('barangay_account.json').as('barangay_account')
    })


    it('Approver must be able to Login in Admin Portal Barangay Department', function () {
        cy.get('#department-index3').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.barangay_account.username_bungoy)
        cy.get('input[placeholder="Enter Password"]').type(this.barangay_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get('.ant-col-18 > :nth-child(2)').click()
        // cy.get('.ant-input').type(Cypress.env("reference"))
        // cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click()
        // cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body > .ant-row > .ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.get('.ant-card-head-title > .ant-row > [align="right"] > .ant-btn').click()
        cy.get('.ant-col-1 > .ant-btn').click()
        cy.get('.ant-modal-close-icon > svg > path').click({ force: true })
        // cy.get('.ant-input-number-input').type('350')
        // cy.get('.ant-form-item-children > .ant-input').type('Complete')
        // cy.get('.ant-btn-group > .ant-btn-primary').click()
        // cy.get('.ant-popover-buttons > .ant-btn-primary').click() // Modal
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-list-item-meta > .ant-list-item-meta-avatar > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})