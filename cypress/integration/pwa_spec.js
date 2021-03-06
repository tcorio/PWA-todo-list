describe('Todo elements tests',() =>{
    it('Check have tasks', () => {
        cy.visit('http://localhost:8086/');
        cy.get('[data-cy=liElement]').should('exist')
    })
    
    it('Should have delete button', () => {
        cy.visit('http://localhost:8086/');
        cy.get('[data-cy=liElement]').first().should('exist')
        cy.get('[data-cy=deleteElement]').first().should('exist');
    })
    
    it('Should remove task',() =>{
        cy.visit('http://localhost:8086/');
        cy.get('[data-cy=liElement]').first().should('exist')
        cy.get('[data-cy=deleteElement]').first().click().should('not.exist');
    })  
    
    it('Should add task',() =>{
        cy.visit('http://localhost:8086/');
        cy.get('[data-cy=todoContent]').type('New Tasks{enter}')
        cy.get('[data-cy=liElement]').last().should('exist')
        cy.get('[data-cy=liElement]').last().should('contain','New Tasks');
    })
    
    it('Should add 3 tasks',() =>{
        cy.visit('http://localhost:8086/');

        for (let index = 1; index <= 3; index++) {
            cy.get('[data-cy=todoContent]').type(`Tasks ${index}{enter}`)
            cy.get('[data-cy=liElement]').should('exist')
            cy.get('[data-cy=liElement]').should('contain',`Tasks ${index}`);   
        }
    }) 

    it('Should have checked task', () => {
        cy.visit('http://localhost:8086/');
        cy.get('[data-cy=liElement]').first().should('exist')
        cy.get('[data-cy=doneCheckbox]').first().check().should('be.checked');
    })
});