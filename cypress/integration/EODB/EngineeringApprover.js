describe('Office of the Municipal Engineer', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('meo_account.json').as('meo_account')
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


    it('Login Admin MEO Department Approver', function () {
        cy.get('#department-index1').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.meo_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.meo_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})