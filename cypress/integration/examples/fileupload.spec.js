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
            cy.get('[data-row-key="0"] > :nth-child(3) > .ant-row > .ant-col-24').within(()=>{
                cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })
            })
            cy.get('[data-row-key="1"] > :nth-child(3) > .ant-row > .ant-col-24').within(()=>{
                cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })
            })
            
            // cy.get(':nth-child(3) > .ant-row > .ant-col-24').click()
            // cy.get('[data-row-key="0"] > :nth-child(3) > .ant-row > .ant-col-24').click()
            // cy.get('[data-row-key="0"] > :nth-child(3)').click()
            // cy.get('[data-row-key="1"] > :nth-child(3)').click()

        })

        // cy.get('.ant-btn-primary').click().wait(5000)
    // cy.get('input[type="button"]').click()
        // cy.get('.ant-row-flex > .ant-col-24').click()
        // cy.get('.ant-btn-primary').click()
        // cy.get(':nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        // // cy.get(':nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner').click()
        // cy.get(':nth-child(5) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        // cy.get(':nth-child(6) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()

    
   
    // it('Applicant Upload Required Documents', () => {
    //     const fileName = 'police-clearance.json';
    //     cy.fixture(fileName).then(fileContent => {
    //         cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })
    //         cy.get('[data-row-key="0"] > :nth-child(3)').click()




            // it('Applicant Upload Required Documents', () => {
            //     const fileName = 'cedula.json';
            //     cy.fixture(fileName).then(fileContent => {
            //     cy.get('input[data-row-key="0"] > :nth-child(3)').upload({ fileContent, fileName, mimeType: 'application/json' })


            // })
            // cy.get('.ant-btn-group > :nth-child(1)').click()
            // cy.get(':nth-child(17) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').click()
            // cy.get('.ant-btn').click().wait(5000)
            // cy.get('button[class="ant-btn ant-btn-primary"]').click().wait(5000)
            //cy.get('button[class="ant-btn ant-btn-primary"]').click()
            // cy.get('.ant-btn-primary').click().wait(5000)



            // cy.get('.ant-btn-primary').click()
            // it('Applicant Upload Required Documents', () => {
            //     const fileName = 'police-clearance.json';
            // cy.pause()
            // cy.fixture(fileName).then(fileContent => {
            // cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })
            // cy.get('[data-row-key="0"] > :nth-child(3)').upload({ fileContent, fileName, mimeType: 'application/json' })


            // cy.scrollTo('top')
            // cy.get(':nth-child(2) > .ant-col-sm-6 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Smith')
            // cy.get('input[placeholder="Select date"]').click()
            // cy.get('.ant-calendar-input').type('1995-05-13')
            // cy.get('.ant-col-sm-13 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control').click()
            // cy.get('.ant-col-sm-13 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-radio-group > :nth-child(1)').click()
            // cy.get(':nth-child(3) > .ant-col-sm-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Manila')
            // cy.get(':nth-child(3) > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click()
            // cy.get('li[style="user-select: none;"]').contains('A+').click();
            // cy.get('.ant-radio-group > :nth-child(4) > :nth-child(2)').click()
            // cy.get(':nth-child(4) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('04278945689')
            // cy.get(':nth-child(4) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('09127895689')
            // cy.get(':nth-child(5) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('IT')
            // cy.get(':nth-child(5) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
            // cy.get('li[style="user-select: none;"]').contains('Below ₱20,000').click();
            // cy.get(':nth-child(6) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('1163')
            // cy.get(':nth-child(6) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('660')
            // cy.get(':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
            // cy.get('li[style="user-select: none;"]').contains('Fair').click();
            // cy.get(':nth-child(7) > .ant-col-sm-12 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
            // cy.get('li[style="user-select: none;"]').contains('Secondary').click();
            // cy.get(':nth-child(8) > .ant-col-sm-11 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Filipino')
            // cy.get(':nth-child(8) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').type('Manila')
            // cy.get('li[style="user-select: none;"]').contains('Voluntary').click()
            // cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type('1000000')
            // cy.get('.ant-col-sm-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('121')
            // cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('222')
            // cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('ANNEX')
            // cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('APPLE')
            // cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('SOLOMON')
            // cy.get(':nth-child(12) > .ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
            // cy.get('li[style="user-select: none;"]').contains('Dagatan').click();
            // cy.get('.ant-btn-primary').click()
            // cy.get('.ant-radio-group > :nth-child(4) > :nth-child(2)').click()
            // // cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
            // // cy.get('li[style="user-select: none;"]').contains('Services').click();
            // // cy.get('.ant-col-xs-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
            // // cy.get('li[style="user-select: none;"]').contains('Service Office').click();
            // cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Global Hub Solutions')
            // cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Global Services Technology')
            // cy.get(':nth-child(5) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('02545774445')
            // cy.get('input[placeholder="Select date"]').click()
            // cy.get('.ant-calendar-input').type('2019-05-05')
            // cy.get(':nth-child(6) > .ant-col-xs-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type('3457894650000')
            // cy.get(':nth-child(8) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('50')
            // cy.get(':nth-child(9) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type('10')
            // cy.get('.ant-col-sm-16 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('525')
            // cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('101')
            // cy.get('[style="margin-left: -2.5px; margin-right: -2.5px;"] > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Main')
            // cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Valley')
            // cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Sapphire')
            // cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click()
            // cy.get('li[style="user-select: none;"]').contains('Bulakin II').click();
            // cy.get('.ant-btn-primary').click()
            // cy.get('#v-step-05 > .ant-card-body > :nth-child(2)').click()
            // cy.get('.ant-select-selection').click()
            // cy.get('li[style="user-select: none;"]').contains('61202 - Mobile telecommunications services').click();
            // cy.get('.ant-col-sm-3 > .ant-btn').click()
            // cy.get('.ant-input').type('1000')
            // cy.get('.ant-input-number-input').type('1000000')
            // cy.pause()

            // })

            // it('Applicant Upload Required Documents', () => {
            //     const fileName = 'police-clearance.json';
            //     // cy.pause()
            //     cy.fixture(fileName).then(fileContent => {
            //     cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' })




            // cy.get('.ant-btn-group > .ant-btn-primary').click()
            // cy.get('.ant-btn-primary').click()
            // cy.get('[align="end"] > .ant-btn-primary').click()
            // // cy.get('[class="anticon anticon-close"] > .ant-btn-primary').click({ multiple: true })
            // cy.get(':nth-child(8) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-row > [align="end"] > .ant-btn').click()
            // // cy.get(':nth-child(9) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-row > [align="end"] > .ant-btn').click({ multiple: true })
            // // cy.scrollTo('top')
            // })
            //     })


            // })


        })
    })
