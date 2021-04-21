
Given(/^que eu acesse a página da VV Test$/, () => {
	cy.visit('/')
});


And(/^acesse o menu "([^"]*)"$/, () => {
    cy.visit('/pesquisa/')
    
});

When(/^eu preencher todos os campos obrigatórios$/, () => {
	    cy.visit('/pesquisa/')
        cy.get('#nf-field-5').type('Ana Carolina')
        cy.get('#nf-field-6').type('Santos')

        cy.get('#nf-field-7').type('ana@ana.com.br')
        cy.get('#nf-field-8').type('ana@ana.com.br')
        
        cy.get('#nf-field-17').type('1633358338')

        cy.get('.nf-field-element [type="radio"]')
        .check('31-49', { force: true }).should('be.checked')

        cy.get('#nf-field-11').select('mais-de-5-anos')
        cy.get('#nf-field-11').should('have.value', 'mais-de-5-anos')

        cy.get('#nf-label-class-field-13-4').click()
         
        cy.get('#nf-field-14').type('Ruby, JS, Python')
        cy.get('#nf-field-15').type('Atualmente, o meu foco é aprimorar,'
        + 'skills de automação para poder colaborar com qualquer time em diferentes linguagens.'
        + 'Outro ponto é voltar a estudar programação, para desenvolver projetos e relembrar pontos já aprendidos.,'
        + 'Tirar a certificação CTFL - AT')

        cy.get('#nf-field-16').click()
});

Then(/^deve ser direcionado para uma página de sucesso$/, () => {
    cy.get('.nf-response-msg').should('contain', 'Your form has been successfully submitted.')
});


