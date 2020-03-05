import 'cypress-file-upload';
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://eodb-qa.ml/app')
    })

    // it('Applicant Register', () => {
    //     cy.get(':nth-child(7) > a > .ant-btn').click()
    //     cy.get(':nth-child(7) > a > .ant-btn').click({
    //         delay: 100
    //     })
    //     cy.get('#first-name').type('Vince')
    //     cy.get('#last-name').type('Belo')
    //     cy.get('#reg-email').type('vbelo@centralizedinc.com')
    //     cy.get('#reg-password').type('admin')
    //     cy.get('#reg-confirm-password').type('admin')
    //     cy.scrollTo('top')
    //     cy.get("#reg-btn").click()
    //     cy.scrollTo('top')
    //     cy.pause()

    // })

    it('Applicant Login', () => {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type('vbelo@centralizedinc.com')
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
        cy.get('.ant-row-flex-space-between > :nth-child(1) > .ant-col-xs-24').click({
            delay: 100
        })
        cy.get(':nth-child(2) > .ant-checkbox-wrapper > :nth-child(2)').click()
        cy.get(':nth-child(3) > .ant-checkbox-wrapper > :nth-child(2)').click()
        cy.get(':nth-child(4) > .ant-checkbox-wrapper > :nth-child(2)').click()
        cy.get(':nth-child(7) > .ant-checkbox-wrapper > :nth-child(2)').click()
        cy.get(':nth-child(8) > .ant-checkbox-wrapper > :nth-child(2)').click()
        cy.get(':nth-child(9) > .ant-checkbox-wrapper > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click()
        cy.scrollTo('top')
        cy.get(':nth-child(2) > .ant-col-sm-6 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Smith')
        cy.get('input[placeholder="Select date"]').click()
        cy.get('.ant-calendar-input').type('1995-05-13')
        cy.get('.ant-col-sm-13 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control').click()
        cy.get(':nth-child(3) > .ant-col-sm-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Manila')
        cy.get(':nth-child(3) > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('li[style="user-select: none;"]').contains('A+').click();
        cy.get('.ant-radio-group > :nth-child(4) > :nth-child(2)').click()
        cy.get(':nth-child(4) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('04278945689')
        cy.get(':nth-child(4) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('09127895689')
        cy.get(':nth-child(5) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('IT')
        cy.get(':nth-child(5) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Below ₱20,000').click();
        cy.get(':nth-child(6) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('1163')
        cy.get(':nth-child(6) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('660')
        cy.get(':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Fair').click();
        cy.get(':nth-child(7) > .ant-col-sm-12 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Secondary').click();
        cy.get(':nth-child(8) > .ant-col-sm-11 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Filipino')
        cy.get(':nth-child(8) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').type('Manila')
        cy.get('li[style="user-select: none;"]').contains('Voluntary').click()
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type('1000000')
        cy.get('.ant-col-sm-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('121')
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('222')
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('ANNEX')
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('APPLE')
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('SOLOMON')
        cy.get(':nth-child(12) > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Dagatan').click();
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-radio-group > :nth-child(4) > :nth-child(2)').click()
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Services').click();
        cy.get(':nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Global Hub Solutions')
        cy.get(':nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Global Services Technology')
        cy.get(':nth-child(7) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('02545774445')
        cy.get('input[placeholder="Select date"]').click()
        cy.get('.ant-calendar-input').type('2019-05-05')
        cy.get(':nth-child(8) > .ant-col-xs-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type('3457894650000')
        cy.get(':nth-child(9) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('50')
        cy.get(':nth-child(10) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type('10')
        cy.get('.ant-col-sm-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('525')
        cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('101')
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Main')
        cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Valley')
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Sapphire')
        cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('Bulakin II').click();
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-card-body > :nth-child(2)').click()
        cy.get('.ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains('61202 - Mobile telecommunications services').click();
        cy.get('.ant-col-sm-3 > .ant-btn').click()
        cy.get('.ant-input').type('1000')
        cy.get('.ant-input-number-input').type('1000000')
        cy.get('[data-row-key="0"] > :nth-child(3) > .ant-row > .ant-col-24 > [style="cursor: pointer; color: blue; font-weight: bold;"] > .ant-upload-select > .ant-upload > .anticon > svg').click()
        cy.pause()

    })

    // it('Applicant Completing the Required Business Permit Fields  ', () => {

    //     cy.get('input[placeholder="Select date"]').click()
    //     cy.get('.ant-calendar-input').type('1982-05-13')
    //     cy.get(':nth-child(4) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('09123456789')
    //     cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('DAGATAN').get('.ant-btn-primary').click()
    //     cy.get('.ant-btn-primary').click({
    //         delay: 100
    //     })
    //     cy.get('.ant-btn-primary').click({
    //         delay: 100
    //     })
    //     cy.get('.ant-radio-group > :nth-child(1)').click().get('.ant-btn-primary').click({
    //         delay: 100
    //     })

    // })


})