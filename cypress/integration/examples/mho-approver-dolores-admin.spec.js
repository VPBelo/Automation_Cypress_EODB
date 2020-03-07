describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-qa.ml/admin')

    })

    it('MHO Department Login', () => {
        cy.pause()

    })

    it('Login Admin MHO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mho@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()

    })
})