import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://news.ycombinator.com", // URL base de las pruebas
    video: true, // Habilitar grabación de videos
    videoCompression: 32, // Comprimir videos para ahorrar espacio (0 = sin compresión)
    videosFolder: "cypress/videos", // Directorio donde se guardarán los videos
    trashAssetsBeforeRuns: true, // Borra videos anteriores antes de cada ejecución
    screenshotOnRunFailure: true, // Captura una imagen si la prueba falla
    defaultCommandTimeout: 10000, // Extiende el tiempo de espera por comando
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
