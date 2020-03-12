describe('Business Permit & Licensing Office', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('bplo_account.json').as('bplo_account')
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


    it('Login Admin BPLO Department Approver', function () {
        cy.get('#department-index9').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.bplo_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.bplo_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })


})