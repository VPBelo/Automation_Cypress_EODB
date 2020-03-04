describe('smartjuan24-dolores', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://eodb-qa.ml/app')
    })
    it('register', () => {
        cy.get(':nth-child(7) > a > .ant-btn').click()
        cy.get('#first-name').type('Vince', { delay: 100 })
        cy.get('#last-name').type('Belo', { delay: 100 })
        cy.get('#reg-email').type('vbelo@centralizedinc.com', { delay: 100 })
        cy.get('#reg-pass').type('admin', { delay: 100 })
        cy.get('#reg-conf-pass').type('admin', { delay: 100 })
        cy.get(".ant-btn").click()
    })
})