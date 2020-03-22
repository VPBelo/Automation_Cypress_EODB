describe('User Reservation in Tourism Portal', () => {


    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
    })


    /**
     * @description Payment
     * 
     */
    it('Applicant should be able to Booking in Tourism Page', function() {
        cy.scrollTo('top')
        cy.get('.ant-menu-item-selected').click()
        cy.get('.v-step__button-skip').click({
            delay: 100
        })
        cy.get('#v-step-2 > :nth-child(6)').click({
            force: true
        })
        cy.scrollTo('top').wait(2000)
        cy.get('.hike_btn').click().wait(2000)
        cy.get('.ant-form-item-children > .ant-radio-group > :nth-child(1)').click({ force: true })
        cy.get('input[placeholder="Birthdate"]').click({
            force: true
        })
        cy.get('.ant-calendar-input').type('1995-12-12')
        cy.get(':nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input').focus().type('Bungoy')
        cy.get(':nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input').focus().type('0912245787965')
            // cy.get('input[placeholder="Arrival Date"]').click({
            //     force: true
            // })
            // cy.get('.ant-calendar-input').type('2020-03-26')
        cy.pause()
        cy.get('.ant-col-8 > .ant-radio-group > .ant-radio-button-wrapper-checked > :nth-child(2)').click()
        cy.get(':nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click({
            force: true
        })
        cy.get('li[style="user-select: none;"]').contains('1 day(s)').click();
        // cy.get(':nth-child(9) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click({
        //     force: true
        // })
        // cy.get('li[style="user-select: none;"]').contains('4').click();
        cy.pause()
        cy.get('.ant-col-4 > .ant-input').type('25')
        cy.get('[style="margin-top: 50px;"] > :nth-child(1)').wait(1000).click()
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control').type('4111111111111111', { delay: 100 })
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control').type('Vince Belo', { delay: 100 })
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control').type('12/22', { delay: 100 })
        cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('232', { delay: 100 })
        cy.get('form > :nth-child(1) > :nth-child(1)').click().wait(5000)
        cy.get('.ant-card-body > .ant-btn').click().wait(5000)
        cy.get(':nth-child(5) > span > #v-step-5').click({ force: true })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)

    })


})