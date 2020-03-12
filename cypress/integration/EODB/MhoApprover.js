describe('Office of the Municipal Health', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('mho_account.json').as('mho_account')
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


    it('Login Admin MHO Department Approver', function () {
        cy.get('#department-index8').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mho_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mho_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})