import LoginPage from "../pages/LoginPage";

describe("Automatización de Inicio de Sesión", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Debe iniciar sesión correctamente", () => {
    
    const username = "cuentademoorionhub@gmail.com";
    const password = "12345678Fs";

    // Ingresar credenciales y hacer login
    LoginPage.clickNavigateToLogin();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    // Validar que el usuario ha iniciado sesión correctamente
    LoginPage.validateSuccessfulLogin();
  });
});
