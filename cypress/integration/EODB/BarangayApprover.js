describe('Office of the Barangay Chairman', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('barangay_account.json').as('barangay_account')
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


    it('Login Admin Barangay Department Approver', function () {
        cy.get('#department-index3').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.barangay_account.username_bungoy)
        cy.get('input[placeholder="Enter Password"]').type(this.barangay_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})