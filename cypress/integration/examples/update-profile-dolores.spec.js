describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to Dolores SmartJuan24 EODB', () => {
        cy.visit('https://dolores.smartjuan24.com/app')
    })

    it('Update Profile', () => {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type('venus.belo.smsgt@gmail.com')
        cy.get('#login-password').type('admin')
        cy.get('#login-btn').click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-card-actions > :nth-child(1)').click()
        // cy.get(':nth-child(2) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Smith')
        // cy.get(':nth-child(3) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type('George')
        // cy.get(':nth-child(4) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Harold')
        // cy.get('.ant-form > .ant-col-24 > .ant-btn').click(5000)
        // cy.get(':nth-child(1) > span > .ant-btn').click({ delay: 100 })
        // cy.pause()


    })

})