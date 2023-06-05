describe('Basic test on cypress.com', () => {
  it('passes', () => {

    cy.visit('https://example.cypress.io');
    cy.contains('get')
    .click()
    .wait(1000);

    cy.get ('#query-btn')
    .click();

    cy.get('#inputName')
    .type('Teste nome Tope')
    .wait(1000);

    cy.get('#inputEmail')
    .type('Teste email Tope')
    .wait(1000);

    cy.get('#inputPassword')
    .type('Teste senha Tope')
    .wait(1000);
 
    cy.get('[data-cy="submit"]')
    .click();

    //Nova URL (Site de)

    cy.get(':nth-child(7) > .col-xs-7 > p > a')
    .click();
   
    cy.get('.DocSearch-Button-Placeholder')
    .click()
    .wait(1000)
    .type('g');

    cy.get('#docsearch-input')
    .type('Started');

    //cy.get('.DocSearch-Dropdown')
   // .contains('Guides').should('be.visible');
    
    cy.get('.DocSearch-Dropdown')             
    .should('contain', 'Guides')    
    .and('contain', 'Examples');

  })
})