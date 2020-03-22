describe('Assessors Approver', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('assessor_account.json').as('assessor_account')
    })

    it('Approver must be able to Login in Admin Portal Assessors Department', function() {
        cy.get('#department-index13').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.assessor_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.assessor_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
            // cy.get('.ant-menu > :nth-child(8)').click().wait(5000)
            // cy.get('.ant-btn-primary').click().wait(5000)

    })


})