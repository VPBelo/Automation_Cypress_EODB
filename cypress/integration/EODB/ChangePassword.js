describe('User Change Password', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
      })
    

    /**
     * @description open url
     * 
     */
    it('Open SmartJuan24', function(){
        cy.visit(this.settings.base_url)
    })

    /**
     * @description Login to User Account
     * 
     */
    it('Login', function(){
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({delay: 100})
        cy.get('#login-email').type(this.user_account.username)
        cy.get('#login-password').type(this.user_account.password)
        cy.get('#login-btn').click()
    })

    /**
     * @description Update Profile Names
     * 
     */
    it('Update Name', function(){
        
        cy.get(':nth-child(1) > span > .ant-btn').click({ force: true })

        cy.get(':nth-child(2) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').clear()
        cy.get(':nth-child(2) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.user_account.firstname)

        cy.get(':nth-child(3) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').clear()
        cy.get(':nth-child(3) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.user_account.middlename)

        cy.get(':nth-child(4) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').clear()
        cy.get(':nth-child(4) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.user_account.lastname)

    })

    /**
     * @description upload avatar and save changes
     * 
     */
    it('Upload Avatar', function(){
        //upload avatar
        const fileName = this.user_account.avatar;
        cy.fixture(fileName).then(fileContent => {
            cy.get('[type="file"]').upload({ fileContent, fileName, mimeType: 'image/png' });
          });
        
        //save changes
        cy.get('.ant-form > .ant-col-24 > .ant-btn').click()
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
    })

})