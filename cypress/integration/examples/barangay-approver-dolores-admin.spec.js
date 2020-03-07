describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-qa.ml/admin')

    })

    it('Barangay Department Login', () => {
        cy.pause()
    })

    it('Login Admin Barangay Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('barangay@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()

    })
})