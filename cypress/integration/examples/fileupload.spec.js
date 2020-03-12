import 'cypress-file-upload';
describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://dolores.smartjuan24.com/app')
    })

    it('Applicant Login', () => {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type('venus.belo.smsgt@gmail.com')
        cy.get('#login-password').type('admin')
        cy.get('#login-btn').click()
        cy.scrollTo('top')

    })

    it('Applicant Apply for New Business Permit', () => {
        cy.scrollTo('top')
        cy.get('.ant-menu-item-selected').click({
            delay: 100
        })
        cy.scrollTo('top')
        cy.get('#v-step-2 > :nth-child(3)').click()
        cy.get('.v-step__button-skip').click({
            delay: 100
        })
        cy.scrollTo('top')
        cy.get('.ant-row-flex-space-between > .ant-row-flex > :nth-child(1)').click()
        cy.get(':nth-child(4) > .ant-checkbox-wrapper > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click()



    })

    it('Applicant Upload Required Documents', () => {
        const fileName = 'police-clearance.json';
        cy.fixture(fileName).then(fileContent => {
            cy.get('[data-row-key="0"] > :nth-child(3) > .ant-row > .ant-col-24').within(() => {
                cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })
            })
            cy.get('[data-row-key="1"] > :nth-child(3) > .ant-row > .ant-col-24').within(() => {
                cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })
            })


        })


    })
})
