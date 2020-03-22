describe('System Administrators', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('administrator_account.json').as('administrator_account')
        cy.fixture('application_details.json').as('application_details')
    })

    it('Admin must be able to Login in Admin Portal Administrator Department', function() {
        cy.get('#department-index12').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.administrator_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.administrator_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5) > span').click({
            force: true
        })
        cy.get('.ant-col-18 > :nth-child(2) > .ant-btn').click()
        cy.get('[style="margin-left: -8px; margin-right: -8px;"] > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').focus().type('VINCE')
        cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').focus().type('BELO')
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').focus().type('vbelo@centralizedinc.com')
        cy.get('.ant-modal-footer > .ant-btn-primary').click()
        cy.scrollTo('top')
        cy.pause()
        cy.get('input[placeholder="Business Identification Number"]').focus().type('158490473761500001')
        cy.get('input[placeholder="Business Name"]').focus().type('IT SOLUTIONS')
        cy.get('input[placeholder="Permit No"]').focus().type('322546545A0C')
        cy.get('input[placeholder="Select date"]').click({force:true})
        cy.get('.ant-calendar-input').type('2019-05-13')
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-input-number-input').type('650000')
        cy.get('.ant-btn-primary').click(2000)
        cy.get('[align="end"] > .ant-btn-primary').click().wait(5000)
        cy.pause() // Attachment
        cy.get(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-row > [align="end"] > .ant-btn').click().wait(2000)
        cy.scrollTo('top')
        cy.get(':nth-child(5) > span > #v-step-5').click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)

    })

    // it('Applicant must be able to Upload Required Documents', function() {
    //     const fileName = 'sec_certificate.json';
    //     cy.fixture(fileName).then(fileContent => {
    //         cy.get('[data-row-key="0"] > :nth-child(3) > .ant-row > .ant-col-24').within(() => {
    //             cy.get('input[type="file"]').upload({
    //                 fileContent,
    //                 fileName,
    //                 mimeType: 'application/json'
    //             })
    //         })
    //         cy.get('[data-row-key="1"] > :nth-child(3) > .ant-row > .ant-col-24').within(() => {
    //             cy.get('input[type="file"]').upload({
    //                 fileContent,
    //                 fileName,
    //                 mimeType: 'application/json'
    //             })
    //         })


    //     })


    // })

    // it('Applicant must be able to Submit Application for Business Permit', () => {
    //     cy.get('.ant-btn-group > .ant-btn-primary').wait(5000).click()
    //     cy.get('.ant-btn-primary').click()
    //     cy.get('[align="end"] > .ant-btn-primary').click().wait(5000)
    //     cy.get('#cypress_ref_no').invoke('text').then((reference) => {
    //         // console.log('reference ####', reference)
    //         Cypress.env("reference", reference)
    //         cy.get(':nth-child(8) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-row > [align="end"] > .ant-btn').click().wait(5000)
    //         cy.scrollTo('top')
    //         cy.get(':nth-child(5) > span > #v-step-5').click({
    //             force: true
    //         })
    //         cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    //     })


    // })


})