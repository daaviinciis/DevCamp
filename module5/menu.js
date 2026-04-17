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
  console.log(`${i + 1}. ${menuCena[i].name} - $${menuCena[i].price}`);
}

console.log("\n=== ACOMPAÑAMIENTOS ===");

for (let i = 0; i < sidesMenu.length; i++) {
  console.log(`${i + 1}. ${sidesMenu[i].name} - $${sidesMenu[i].price}`);
}

// SIMULACIÓN
let platoElegido = menuCena[0];
let side1 = sidesMenu[0];
let side2 = sidesMenu[1];

// COMENTARIOS
const comentarios = [
  "¡Muy buena elección!",
  "Eso es un clásico de la cocina.",
  "Te va a encantar.",
  "Excelente elección.",
  "Muy popular en el restaurante."
];

function comentarioCamarera() {
  const indice = Math.floor(Math.random() * comentarios.length);
  return comentarios[indice];
}

// PEDIDO
let pedido = [platoElegido, side1, side2];

let total = 0;

console.log("\n=== TU PEDIDO ===");

for (let i = 0; i < pedido.length; i++) {
  console.log(
    `${pedido[i].name} - $${pedido[i].price} | ${comentarioCamarera()}`
  );
  total += pedido[i].price;
}

// TOTAL
console.log("\nTOTAL A PAGAR: $" + total);