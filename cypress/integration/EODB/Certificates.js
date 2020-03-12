describe('User Certificates', () => {


    /**
     * @description open url
     * 
     */
    it('Open SmartJuan24', function () {
        cy.visit(this.settings.base_url)
    })

    /**
     * @description Login to User Account
     * 
     */
    it('Login', function () {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({ delay: 100 })
        cy.get('#login-email').type(this.user_account.username)
        cy.get('#login-password').type(this.user_account.password)
        cy.get('#login-btn').click()
    })

    it('Application Tracker', () => {
        cy.scrollTo('top')
        cy.get('.ant-card-actions > :nth-child(2)').click({
            delay: 100
        })


    })


})