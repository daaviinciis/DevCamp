// MENU
const menuCena = [
  { name: "Hamburguesa", price: 12 },
  { name: "Ensalada", price: 10 },
  { name: "Pollo", price: 11 }
];

const sidesMenu = [
  { name: "Patatas fritas", price: 4 },
  { name: "Ensalada pequeña", price: 5 },
  { name: "Sopa", price: 3 }
];

// MOSTRAR MENU
console.log("=== MENÚ CENA ===");

for (let i = 0; i < menuCena.length; i++) {
  console.log(`${i + 1}. ${menuCena[i].nombre} - $${menuCena[i].precio}`);
}

console.log("\n=== ACOMPAÑAMIENTOS ===");

for (let i = 0; i < sides.length; i++) {
  console.log(`${i + 1}. ${sides[i].nombre} - $${sides[i].precio}`);
}

// COMENTARIOS
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

// SIMULACIÓN
let platoElegido = menuCena[0];
let side1 = sides[0];
let side2 = sides[1];

// RESUMEN DEL PEDIDO
let total = 0;

let pedido = [
  platoElegido,
  side1,
  side2
];

console.log("\n=== TU PEDIDO ===");

for (let i = 0; i < pedido.length; i++) {
  console.log(
    `${pedido[i].nombre} - $${pedido[i].precio} | ${comentarioAleatorio()}`
  );
  total += pedido[i].precio;
}

// TOTAL
console.log("\nTOTAL A PAGAR: $" + total);