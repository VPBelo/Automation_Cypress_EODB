describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://dolores.smartjuan24.com/admin')

    })

    it('Tourism Department Login', () => {
        cy.get('#department-index0').click()

    })

    it('Login Admin Tourism Approver', () => {
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('tourism@gmail.com');
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('admin');
        cy.get('.ant-btn').click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })

    it('MTO Department Login', () => {
        cy.get('#department-index2').click()

    })

    it('Login Admin MTO Approver for CTC validity', () => {
        cy.get('input[placeholder="Email Address"]').type('mto@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        // cy.scrollTo('top')
        // cy.get(':nth-child(1) > .card_btn > .ant-card-body').click()
        // cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body > .ant-row > .ant-col-18 > :nth-child(2)').click() // For Processing
        // cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click() // For Progress
        // cy.get('.ant-btn-primary').click()
        // cy.get('[aria-selected="false"] > span').click()
        // cy.get(':nth-child(1) > .ant-collapse-header').click()
        // cy.get(':nth-child(2) > .ant-collapse-header').click()
        // cy.scrollTo('top')
        // cy.get('.ant-checkbox-input').click()
        // cy.get('.ant-card-body > .ant-input').type('Approved')
        // cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        // cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        // cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(6)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('MEO Department Login', () => {
        cy.get('#department-index1').click()

    })

    it('Login Admin MEO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('meo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('Barangay Department Login', () => {
        cy.get('#department-index3').click()
    })

    it('Login Admin Barangay Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('barangay_dagatan@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('Investigator Department Login', () => {
        cy.get('#department-index4').click().wait(5000)

    })

    it('Login Admin INVESTIGATOR Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('police_investigator@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('Police Department Login', () => {
        cy.get('#department-index5').click()

    })

    it('Login Admin PNP Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('police_chief@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('MPDC Department Login', () => {
        cy.get('#department-index6').click()

    })

    it('Login Admin MPDC Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mpdc@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('MHO Department Login', () => {
        cy.get('#department-index8').click()

    })

    it('Login Admin MHO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mho@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('MENRO Department Login', () => {
        cy.get('#department-index7').click()

    })

    it('Login Admin MENRO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('menro@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('BPLO Department Login', () => {
        cy.get('#department-index9').click()

    })

    it('Login Admin BPLO Approver For Compute Fees', () => {
        cy.get('input[placeholder="Email Address"]').type('bplo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('MTO Department Login', () => {
        cy.get('#department-index2').click()

    })

    it('Login Admin MTO Approver for Computation of Fees', () => {
        cy.get('input[placeholder="Email Address"]').type('mto@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(6)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('BFP Department Login', () => {
        cy.get('#department-index10').click()

    })

    it('Login Admin BFP Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('bfp@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('BPLO Department Login', () => {
        cy.get('#department-index9').click()

    })

    it('Login Admin BPLO Approver For Final Assessment', () => {
        cy.get('input[placeholder="Email Address"]').type('bplo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('MAYORS OFFICE Login', () => {
        cy.get('#department-index11').click()

    })

    it('Login Admin MAYORS Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mayor@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu-root > :nth-child(8)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('ADMINISTRATOR Department Login', () => {
        cy.get('#department-index12').click()

    })

    it('Login Admin Administrator Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('admin@centralizedinc.com');
        cy.get('input[placeholder="Enter Password"]').type('Ariel123');
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(8)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })



})