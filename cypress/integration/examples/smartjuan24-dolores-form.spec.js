import 'cypress-file-upload';

describe('My first cypress test', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://eodb-qa.ml/app')
    })

    //login
    it('login', () => {
        cy.get(':nth-child(6) > a > .ant-btn').click({ delay: 100 })
        cy.get('#login-email').type('antoniobasasjr@gmail.com', { delay: 100 })
        cy.get('#login-password').type('1234567890', { delay: 100 })
        cy.get('#login-btn').click({ delay: 100 })

        //
        it('dashboard', () => {
            // cy.get('.ant-menu :nth-child(3)').click()
            // cy.get('.ant-menu > :nth-child(2)').select()
            cy.get('.ant-col-md-9 > .item-buttons').click()
                // cy.get('.ant-btn-primary').click()

        })

        // const fileName = 'example.json';

        // cy.fixture(fileName).then(fileContent => {
        //     cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' });
        // });

    })
})



Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})