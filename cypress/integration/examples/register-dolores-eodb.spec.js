describe('smartjuan24-dolores', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://eodb-qa.ml/app')
    })
    it('register', () => {
        cy.get(':nth-child(7) > a > .ant-btn').click()
        cy.get(':nth-child(7) > a > .ant-btn').click({ delay: 100 })
        cy.get('#first-name').type('Vince', { delay: 100 })
        cy.get('#last-name').type('Belo', { delay: 100 })
        cy.get('#reg-email').type('vbelo@centralizedinc.com', { delay: 100 })
        cy.get('#reg-password').type('admin', { delay: 100 })
        cy.get('#reg-confirm-password').type('admin')
        cy.scrollTo('top')
        cy.get("#reg-btn").click()
        cy.scrollTo('top')
    })
})