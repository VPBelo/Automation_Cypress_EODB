describe('My first cypress test', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-qa.ml/admin')

    })
    it('Login Admin MTO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mto@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()

    })
})