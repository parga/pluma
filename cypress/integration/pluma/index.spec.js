/// <reference types="cypress" />



context('Pluma workflow', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pluma");
  })

  function checkForm(command) {
    cy.get("button").should("be.disabled");
    command();
    cy.get(`[data-cy="next-button"]`).should("be.enabled").click();
  }

  // https://on.cypress.io/interacting-with-elements

  it('.check that you can complete a form and come back with your session', () => {
    cy.get('button')
      .should('be.disabled')

    cy.get('[data-cy="input"]')
      .type("fake@email.com")
      .should("have.value", "fake@email.com")

    cy.get("button")
      .should("be.enabled")
      .click()

    checkForm(() => {
      cy.get("input").type("Jorge Parga");
    });

    checkForm(() => {
        cy.get("input").type("Brasilia 601");
    });

    checkForm(() => {
      cy.get(`[type="radio"].p-radio`).check("EMPLOYED", { force: true });
    });

    checkForm(() => {
      cy.get(`[type="radio"].p-radio`).check("yes", { force: true });
    })

    checkForm(() => {
      cy.get("input").type("2");
    });

    checkForm(() => {
      cy.get("input").type("el.parga@gmail.com");
    });

    cy.get(".home-container", { timeout: 10000 }).should("be.visible");

    cy.get('a').click();

    cy.get('[data-cy="input"]')
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get("button").should("be.enabled").click();

    cy.get(".home-container", { timeout: 10000 }).should("be.visible");

  })
})
