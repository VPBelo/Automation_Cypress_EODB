describe('System Administrators', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('administrator_account.json').as('administrator_account')
    })

    it('Admin must be able to Login in Admin Portal Administrator Department', function () {
        cy.get('#department-index12').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.administrator_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.administrator_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(8)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })


})