describe("Modal", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens and closes modal", () => {
    //close-icon, create-new-button, overlay, cancel-button

    cy.log("🚩 open overlay");
    cy.getBySel("create-new-button").contains("Add new list").click();
    cy.getBySel("overlay").should("exist");
    cy.getBySel("overlay-header").contains("Create new list");

    cy.log("🚩 hide overlay with ovelay click");
    cy.getBySel("overlay").click({ force: true });
    cy.getBySel("overlay-header").should("not.exist");

    cy.log("🚩 hide overlay with close icon click");
    cy.getBySel("create-new-button").contains("Add new list").click();
    cy.getBySel("close-icon").click();
    cy.getBySel("overlay-header").should("not.exist");
  });

  it("shows modal children", () => {
    //close-icon, create-new-button, overlay

    //intercepting '/' route because cant intercept request
    cy.intercept("/").as("request");

    cy.log("🚩 open overlay");
    cy.getBySel("create-new-button").contains("Add new list").click();
    cy.getBySel("overlay").should("exist");

    cy.log("🚩 check header content");
    cy.getBySel("overlay-header").contains("Create new list");

    cy.log("🚩 cancel button should hide overlay");
    cy.getBySel("cancel-button").click();
    cy.getBySel("overlay-header").should("not.exist");

    cy.log("🚩 submit form and hide overlay");
    cy.getBySel("create-new-button").contains("Add new list").click();
    cy.get("#new-list-form input").type("test");
    cy.getBySel("submit-button").contains("Submit").click();
    cy.wait("@request");
    cy.getBySel("overlay-header").should("not.exist");
  });
});
