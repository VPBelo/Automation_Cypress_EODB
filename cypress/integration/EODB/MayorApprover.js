describe('Office of the Mayor', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('mayor_account.json').as('mayor_account')
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


    it('Login Admin Mayors Office Approver', function () {
        cy.get('#department-index11').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mayor_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mayor_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu-root > :nth-child(8)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })


})