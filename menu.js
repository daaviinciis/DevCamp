// Menu
const comentarios = [
  "¡Muy buena elección!",
  "Eso es un clásico de la cocina vasca.",
  "Te va a encantar, es una especialidad de la casa.",
  "Excelente elección, muy tradicional.",
  "Ese plato es muy popular aquí."
];

function comentarioCamarera() {
  const indice = Math.floor(Math.random() * comentarios.length);
  return comentarios[indice];
}