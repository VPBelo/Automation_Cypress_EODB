describe('User Assessors Request Portal', () => {


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
    it('Applicant should be able to Request for RPT', function() {
        cy.scrollTo('top')
        cy.get('.ant-menu-item-selected').click()
        cy.get('.v-step__button-skip').click({
            delay: 100
        })
        cy.get('#v-step-2 > :nth-child(5)').click({
            force: true
        })
        cy.scrollTo('top').wait(2000)
        cy.get('.ant-col-xs-24 > .ant-row-flex-center > :nth-child(2)').click()
        cy.scrollTo('top')
        cy.get(':nth-child(3) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input').focus().type('34223222C')
        cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input').focus().type('33445412122C')
        cy.get(':nth-child(3) > :nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input').focus().type('31445454C')
        cy.get('input[placeholder="Previous Transaction Date"]').click({
            force: true
        })
        cy.get('.ant-calendar-input').type('2019-12-12')
        cy.get(':nth-child(5) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input').focus().type('31445454C')
        cy.get('.ant-form-item-children > .form-input > .ant-select-selection').click({
            force: true
        })
        cy.get('li[style="user-select: none;"]').contains('Bungoy').click();
        cy.get(':nth-child(6) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input').focus().type('Vince Belo')
        cy.get('.ant-input-number-input').focus().type('3453569870000')
        cy.get('.ant-col-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input').focus().type('Bungoy')
        cy.get(':nth-child(9) > [align="right"] > .ant-btn').click({
            force: true
        })
        cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input > .ant-select-selection').click({
            force: true
        })
        cy.get('li[style="user-select: none;"]').contains('AGRICULTURAL').click();
        cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input > .ant-select-selection').click({
            force: true
        })
        cy.get('li[style="user-select: none;"]').contains('MULTI-FRUITLAND').click();
        cy.get(':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .form-input > .ant-select-selection').click({
            force: true
        })
        cy.get('li[style="user-select: none;"]').contains('R4').click();
        cy.get('.form-input > .ant-input-number-input-wrap > .ant-input-number-input').type('500')
        cy.get('.ant-modal-footer > .ant-btn-group > .ant-btn-primary').wait(1000).click({
            force: true
        })
        cy.get('.ant-col-24 > .form-input > .ant-select-selection').click({
            force: true
        })
        cy.get('li[style="user-select: none;"]').contains('SSS UMID Card').click();
        cy.get(':nth-child(10) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').focus().type('01111111C')
        cy.pause()
        cy.get('.ant-col-24 > .ant-btn-group > .ant-btn-primary').click({
            force: true
        })
        cy.get('[align="end"] > .ant-btn').wait(2000).click()
        cy.scrollTo('top')
        cy.get('#my-application').click({ force: true })
        cy.scrollTo('top')
        cy.get(':nth-child(5) > span > #v-step-5').click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    })


})