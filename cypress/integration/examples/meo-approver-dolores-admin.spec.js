describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-qa.ml/admin')

    })

    it('MEO Department Login', () => {
        cy.pause()

    })

    it('Login Admin MEO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('meo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()

    })
})