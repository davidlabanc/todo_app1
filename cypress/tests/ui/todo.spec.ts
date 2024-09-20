

describe('Todo', () => {
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

    // const localStorage = cy.getLocalStorage('theme')
    // console.log(localStorage)

    cy.getBySel('theme-button').click()
    cy.getBySel('light-mode-icon').should('exist')
    cy.getBySel('dark-mode-icon').should('not.exist')
    cy.reload()
    cy.getBySel('dark-mode-icon').should('not.exist')
    cy.getBySel('light-mode-icon').should('exist')

  });

  it('opens and closes modal', () => {
    //close-icon, create-new-button, overlay, cancel-button

    cy.log("🚩 open overlay")
    cy.getBySel('create-new-button').contains('Add new list').click()
    cy.getBySel('overlay').should('exist')
    cy.getBySel('overlay-header').contains('Create new list')
    
    cy.log("🚩 hide overlay with ovelay click")
    cy.getBySel('overlay').click({ force: true })
    cy.getBySel('overlay-header').should('not.exist')

    cy.log("🚩 hide overlay with close icon click")
    cy.getBySel('create-new-button').contains('Add new list').click()
    cy.getBySel('close-icon').click()
    cy.getBySel('overlay-header').should('not.exist')

  });

  it.only('shows modal children', () => {
    //close-icon, create-new-button, overlay

    //intercepting '/' route because 
    cy.intercept('/').as('request')

    cy.log("🚩 open overlay")
    cy.getBySel('create-new-button').contains('Add new list').click()
    cy.getBySel('overlay').should('exist')

    cy.log("🚩 check header content")
    cy.getBySel('overlay-header').contains('Create new list')

    cy.log("🚩 cancel button should hide overlay")
    cy.getBySel('cancel-button').click()
    cy.getBySel('overlay-header').should('not.exist')

    cy.log("🚩 submit form and hide overlay")
    cy.getBySel('create-new-button').contains('Add new list').click()
    cy.get('#new-list-form input').type('test')
    cy.getBySel('submit-button').contains('Submit').click()
    cy.wait('@request')
    cy.getBySel('overlay-header').should('not.exist')
  });
});