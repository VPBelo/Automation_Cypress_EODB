describe('SmartJuan24 User Portal', () => {


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
    it('Applicant should be able to View Mayors Corner Page', function() {
        cy.get('#my-application').click({
            force: true
        })
        cy.scrollTo('top')
        cy.get('#v-step-2 > :nth-child(2)').click()
        cy.scrollTo('bottom', {
            duration: 10000
        })
        cy.scrollTo(0, 300)
        cy.get(':nth-child(1) > .ant-card > .ant-card-body > .ant-comment > .ant-comment-inner > .ant-comment-content > .ant-comment-actions > :nth-child(1) > :nth-child(1) > .anticon > svg').click({
            force: true
        })
        cy.get(':nth-child(5) > span > #v-step-5').click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').wait(2000).click()
    })


})