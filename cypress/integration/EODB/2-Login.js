import 'cypress-file-upload';

describe('Login User Account', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
        cy.fixture('application_details.json').as('application_details')
        cy.fixture('sec_certificate.json').as('sec_certificate')
    })

    it('Open SmartJuan24', function () {
        cy.visit(this.settings.base_url)
    })

    it('Applicant Login', function () {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type(this.user_account.username)
        cy.get('#login-password').type(this.user_account.password)
        cy.get('#login-btn').click()
        cy.scrollTo('top')

    })

    it('Applicant Apply for New Business Permit', function () {
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
        // cy.get(':nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get(':nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('.ant-btn-primary').click()
        cy.scrollTo('top')
        // cy.get(':nth-child(2) > .ant-col-sm-6 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.middlename1)
        cy.get('input[placeholder="Select date"]').click()
        cy.get('.ant-calendar-input').type('1995-05-13')
        cy.get('.ant-col-sm-13 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control').click()
        cy.get('.ant-col-sm-13 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-radio-group > :nth-child(1)').click()
        cy.get(':nth-child(3) > .ant-col-sm-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.birthplace)
        cy.get(':nth-child(3) > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
        cy.get('li[style="user-select: none;"]').contains(this.application_details.blood_type).click();
        cy.get('.ant-radio-group > :nth-child(4) > :nth-child(2)').click()
        cy.get(':nth-child(4) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.telno)
        cy.get(':nth-child(4) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.mobile)
        cy.get(':nth-child(5) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.occupation)
        cy.get(':nth-child(5) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains(this.application_details.monthly_salary).click();
        cy.get(':nth-child(6) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.height)
        cy.get(':nth-child(6) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.weight)
        cy.get(':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains(this.application_details.completion).click();
        cy.get(':nth-child(7) > .ant-col-sm-12 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains(this.application_details.educational_attainment).click();
        cy.get(':nth-child(8) > .ant-col-sm-11 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.citizenship)
        // cy.get(':nth-child(8) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').type(this.application_details.birthplace)
        cy.get('li[style="user-select: none;"]').contains(this.application_details.basic_community).click()
        cy.get(':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(this.application_details.real_property)
        // cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type('100000')
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(this.application_details.annual_salaries)
        cy.get('.ant-col-sm-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.bldg_no)
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.unit_no)
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.bldg_name)
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.street)
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.subdivision)
        cy.get(':nth-child(12) > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains(this.application_details.barangay_desc).click();
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-radio-group > :nth-child(4) > :nth-child(2)').click()
        // cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        // cy.get('li[style="user-select: none;"]').contains('Services').click();
        // cy.get('.ant-col-xs-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        // cy.get('li[style="user-select: none;"]').contains('Service Office').click();
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.business_name)
        cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.business_franchise)
        cy.get(':nth-child(5) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.registration_no)
        cy.get('input[placeholder="Select date"]').click()
        cy.get('.ant-calendar-input').type(this.application_details.registration_date)
        cy.get(':nth-child(6) > .ant-col-xs-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(this.application_details.tin)
        cy.get(':nth-child(8) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.business_area)
        cy.get(':nth-child(9) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(this.application_details.employees_establishment)
        cy.get('.ant-col-sm-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.business_address.bldg_no)
        cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.business_address.unit_no)
        cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.business_address.bldg_name)
        cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.business_address.street)
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type(this.application_details.business_address.subdivision)
        cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains(this.application_details.business_address.barangay).click();
        cy.get('.ant-btn-primary').click()
        cy.get('#v-step-05 > .ant-card-body > :nth-child(2)').click()
        cy.get('.ant-select-selection').click()
        cy.get('li[style="user-select: none;"]').contains(this.application_details.line_of_business).click();
        cy.get('.ant-col-sm-3 > .ant-btn').click()
        cy.get('.ant-input').type(this.application_details.units)
        cy.get('.ant-input-number-input').type(this.application_details.capital_investment)
        cy.pause()

    })

    it('Applicant Upload Required Documents', function () {
        const fileName = 'sec_certificate.json';
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