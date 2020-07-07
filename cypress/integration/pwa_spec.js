describe('Todo elements tests',() => {
    beforeEach(() => {
        cy.visit('http://localhost:8086/');
    })

    it('Check have tasks', () => {
        cy.visit('http://localhost:8086/');
        cy.get('[data-cy=liElement]').should('exist')
    })
    
    it('Should disable form button when input is empty', () => {
        cy.get('[data-cy=formSubmitButton]').should('be.disabled')
        cy.get('[data-cy=formInput]').type(`abc`)
        cy.get('[data-cy=formSubmitButton]').should('not.be.disabled')
        cy.get('[data-cy=formInput]').type('');
        cy.get('[data-cy=formSubmitButton]').should('be.disabled');
    })

    it('Should have delete button', () => {
        cy.get('[data-cy=liElement]').first().should('exist')
        cy.get('[data-cy=deleteElement]').first().should('exist');
    })
    
    it('Should remove task',() =>{
        cy.get('[data-cy=liElement]').first().should('exist')
        cy.get('[data-cy=deleteElement]').first().click().should('not.exist');
    })  
    
    it('Should add task',() =>{
        cy.get('#todoContent').type('New Tasks{enter}')
        cy.get('[data-cy=liElement]').last().should('exist')
        cy.get('[data-cy=liElement]').last().should('contain','New Tasks');
    })
    
    // it('shouldnt add task',() =>{
    //     cy.visit('http://localhost:8086/');
    //     // const elementsNumber = cy.get('[data-cy=liElement]').its('lenght');
    //     const elementsNumber = cy.get('[data-cy=todolist]').children();
    //     cy.get('#todoContent').type('{enter}')
    //     cy.get('[data-cy=todolist]').children().should('have.lenght',elementsNumber);
    // }) 
    
    it('Should add 3 tasks',() =>{

        for (let index = 1; index <= 3; index++) {
            cy.get('#todoContent').type(`Tasks ${index}{enter}`)
            cy.get('[data-cy=liElement]').should('exist')
            cy.get('[data-cy=liElement]').should('contain',`Tasks ${index}`);   
        }
    }) 

    it('Should have checked task', () => {
        cy.get('[data-cy=liElement]').first().should('exist')
        cy.get('[data-cy=doneCheckbox]').first().check().should('be.checked');
    })

});