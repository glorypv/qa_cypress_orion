
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";

describe("Finalización de Compra en Orion Market", () => {
    it("Debe completar el proceso de compra y validar la confirmación", () => {


        LoginPage.visit();

        const username = "cuentademoorionhub@gmail.com";
        const password = "12345678Fs";
        // Ingresar credenciales y hacer login
        LoginPage.clickNavigateToLogin();
        LoginPage.enterUsername(username);
        LoginPage.enterPassword(password);
        LoginPage.clickLogin();

        CheckoutPage.visit();

        CheckoutPage.selectFirstContact();
        CheckoutPage.clickNextButton();
        
        CheckoutPage.selectFirstLegalEntity();
        CheckoutPage.selectFirstDistributionUnit();
        CheckoutPage.fillInputField("1");
        CheckoutPage.clickNextButton();

        // Datos de prueba
        /* const userData = {
           name: "Juan Pérez",
           email: "juan.perez@example.com",
           address: "Av. Siempre Viva 123",
           paymentMethod: "credit-card"
         };
     
         CheckoutPage.fillCheckoutForm(userData);
         CheckoutPage.confirmOrder();
         CheckoutPage.validateSuccessMessage();*/
    });
});
