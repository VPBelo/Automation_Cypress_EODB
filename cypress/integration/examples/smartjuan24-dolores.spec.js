describe('My first cypress test', () => {

it('Navigate to eodb-dev.ml site', () => {
cy.visit('https://eodb-dev.ml/admin')

})
it('Login to applicaion', () => {
cy.get('input[placeholder="Email Address"]').type('admin@centralizedinc.com');
    cy.get('input[placeholder="Enter Password"]').type('Ariel123');
    cy.get(".ant-btn").click()

})
})