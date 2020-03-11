import 'cypress-file-upload';


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-dev.ml', () => {
        cy.visit('https://eodb-dev.ml/app')
    })

    it('Update Profile', () => {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type('antoniobasasjr@gmail.com')
        cy.get('#login-password').type('1234567890')
        cy.get('#login-btn').click()
        // cy.get('.ant-card-actions > :nth-child(1)').click()
        cy.get(':nth-child(1) > span > .ant-btn').click({ force: true })
        cy.get(':nth-child(2) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Smith')
        cy.get(':nth-child(3) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type('George')
        cy.get(':nth-child(4) > .ant-col-16 > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Harold')
        
        //upload avatar
        const fileName = 'UNLAD.png';
        cy.fixture(fileName).then(fileContent => {
            cy.get('[type="file"]').upload({ fileContent, fileName, mimeType: 'image/png' });
          });
        
        //save changes
        cy.get('.ant-form > .ant-col-24 > .ant-btn').click()
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
        // cy.get('.ant-upload-select > .ant-upload').click()
        // cy.get('.ant-form > .ant-col-24 > .ant-btn').click()
            // cy.get(':nth-child(1) > span > .ant-btn').click({ delay: 100 })
            // cy.pause()


    })

})