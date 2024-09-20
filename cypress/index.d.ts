
declare namespace Cypress {
  interface Chainable<Subject = any> {
    getBySel(value: string, args?: any): Chainable<any>;
  }
}