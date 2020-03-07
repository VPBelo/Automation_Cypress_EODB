describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-qa.ml/admin')

    })

    it('MO Department Login', () => {
        cy.pause()

    })

    it('Login Admin MO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()

    })
})