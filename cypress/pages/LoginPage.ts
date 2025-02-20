class LoginPage {
    visit(): void {
        cy.visit("https://dev.market.orion.global/es/store/");
    }

    clickNavigateToLogin(): void {
        cy.xpath("//a[contains(@href, '/auth/jwt/login/') and contains(text(), 'Entrar')]")
            .should("be.visible")
            .first()
            .click();
    }

    enterUsername(username: string): void {
        cy.xpath("//input[@name='email']")
            .should("be.visible").type(username);
    }

    enterPassword(password: string): void {
        cy.xpath("//input[@name='password']")
            .should("be.visible")
            .type(password, { log: false }); // Ocultar contraseña en logs
    }

    clickLogin(): void {
        cy.xpath("//button[@type='submit']").should("be.visible").click();
    }

    validateSuccessfulLogin(): void {

        // Validar que el usuario fue redirigido correctamente (no está en la página de login)
        cy.url().should("not.include", "/auth/jwt/login");

        // Validar que el avatar del usuario está visible (indicando que está autenticado)
        cy.xpath("(//button[contains(@class, 'MuiIconButton-root')])[1]").should("be.visible");

       
    }
}

export default new LoginPage();


/*class LoginPage {
    visit(): void {
      cy.visit("https://dev.market.orion.global/es/store/");
    }
  
    enterUsername(username: string): void {
      cy.get("input[name='username']").should("be.visible").type(username);
    }
  
    enterPassword(password: string): void {
      cy.get("input[name='password']").should("be.visible").type(password, { log: false }); // Ocultar contraseña en logs
    }
  
    clickLogin(): void {
      cy.get("button[type='submit']").should("be.visible").click();
    }

    clickNavigateToLogin(): void {
        cy.get("a[href='/auth/jwt/login/']").contains("Entrar").click()
          .should("be.visible")
          .click();
      }
  
    validateSuccessfulLogin(): void {
      cy.get(".user-profile").should("be.visible"); // Verificar que el perfil del usuario está visible
    }
  }
  
  export default new LoginPage();
  */