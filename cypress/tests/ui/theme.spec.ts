describe('Theme', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('changes to nightmode and back', () => {
    const button = cy.getBySel('theme-button')

    button.should('exist')
    cy.getBySel('light-mode-icon').should('exist')
    button.click()
    cy.getBySel('dark-mode-icon').should('exist')
    cy.getBySel('light-mode-icon').should('not.exist')
    cy.reload()
    cy.getBySel('dark-mode-icon').should('exist')
    cy.getBySel('light-mode-icon').should('not.exist')

    cy.getBySel('theme-button').click()
    cy.getBySel('light-mode-icon').should('exist')
    cy.getBySel('dark-mode-icon').should('not.exist')
    cy.reload()
    cy.getBySel('dark-mode-icon').should('not.exist')
    cy.getBySel('light-mode-icon').should('exist')

  });
});