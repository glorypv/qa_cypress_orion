class HackerNewsPage {
    visit(): void {
      cy.visit('https://news.ycombinator.com/newest'); // Navegar a la página
    }
  
    getArticles(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get('.athing'); 
    }
  
    clickMoreButton(): void {
      cy.get('a.morelink[href*="newest?next="]').then(($btn) => {
        if ($btn.length > 0) {
          cy.wrap($btn).click();
          cy.wait(3000); 
        }
      });
    }
  }
  
  export default new HackerNewsPage();
  