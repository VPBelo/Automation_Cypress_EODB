describe('Bureau of Fire Protection', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('bfp_account.json').as('bfp_account')
      })
    


    /**
     * @description open url
     * 
     */
    it('Open SmartJuan24', function () {
        cy.visit(this.settings.base_url1)
    })

    /**
     * @description Login to User Account
     * 
     */


    it('Login Admin MTO Department Approver', function () {
        cy.get('#department-index10').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.bfp_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.bfp_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})