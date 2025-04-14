module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Opcional: Configuración de temas de DaisyUI
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Puedes elegir los temas que quieras
  },
}