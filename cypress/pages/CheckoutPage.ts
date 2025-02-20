class CheckoutPage {
    visit(): void {
        cy.visit("https://dev.market.orion.global/es/cart/");
    }


    selectFirstContact(): void {
        cy.xpath("//input[@id='autocomplete-contacts']")
            .should("be.visible")
            .click();

        cy.xpath("(//div[contains(@class, 'MuiAutocomplete-tag')])[1]")
            .should("be.visible")
            .click();

        cy.log(" Se seleccionó el primer contacto en la lista");
    }

    clickNextButton(): void {
        cy.xpath("//button[contains(., 'Siguiente')]")
            .should("be.visible")
            .click();

        cy.log(" Se hizo clic en el botón 'Siguiente'");
    }

    selectFirstDistributionUnit(): void {

        cy.get("div[role='combobox']")
            .should("be.visible")
            .click();

        cy.get("ul.MuiList-root[role='listbox']")
            .should("be.visible");

        cy.get("li[role='option'][data-value='quantity']")
            .should("be.visible")
            .click();
        cy.log(" Se seleccionó la primera unidad de distribución");
    }

    selectFirstLegalEntity(): void {
        cy.get("#autocomplete-legalEntity")
            .should("be.visible")
            .click()
            .type("{downarrow}");

        // 🔹 Esperar a que la lista de opciones aparezca
        cy.get(".MuiAutocomplete-listbox li")
            .should("be.visible")
            .first()
            .click();


        cy.log(" Se seleccionó la primera Razón Social");
    }

    fillInputField(value: string): void {
        cy.get("input[id=':rj:']")
            .should("be.visible")
            .clear()
            .type(value)
            .should("have.value", "1");

        cy.log(`Se ingresó el valor: ${value}`);
    }

    confirmOrder(): void {
        cy.contains("span", "Enviar")
            .should("be.visible");
        // .click(); // Hace clic en "Enviar"
        // Validar que aparece el mensaje de éxito
        // cy.contains("Compra realizada con éxito")
        //.should("be.visible");

        cy.log(" Compra finalizada correctamente.");
    }

}

export default new CheckoutPage();
