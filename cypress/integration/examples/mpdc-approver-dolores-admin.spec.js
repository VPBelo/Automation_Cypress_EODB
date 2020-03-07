describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-qa.ml/admin')

    })

    it('MPDC Department Login', () => {
        cy.pause()

    })

    it('Login Admin MPDC Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mpdc@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()

    })
})