describe('Office of the Municipal Treasurer', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('mto_account.json').as('mto_account')
    })


    it('Approver must be able to Login in Admin Portal and Process walkin application', function() {
        cy.get('#department-index2').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mto_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mto_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(2)').click({
            force: true
        })
        cy.get(':nth-child(1) > .ant-card > .ant-card-body > .ant-input-affix-wrapper > .ant-input').focus().type('1584078195123296	')
            // cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get('.ant-menu > :nth-child(6)').click()
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})