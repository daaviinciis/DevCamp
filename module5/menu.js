// MENU
const menu = {
  breakfast: [
    { name: "Tostadas", price: 5 },
    { name: "Huevos revueltos", price: 6 },
    { name: "Pancakes", price: 7 }
  ],
  lunch: [
    { name: "Hamburguesa", price: 10 },
    { name: "Ensalada", price: 8 },
    { name: "Pollo", price: 9 }
  ],
  dinner: [
    { name: "Hamburguesa", price: 12 },
    { name: "Ensalada", price: 10 },
    { name: "Pollo", price: 11 }
  ]
};

const sidesMenu = [
  { name: "Patatas fritas", price: 4 },
  { name: "Sopa", price: 3 },
  { name: "Ensalada pequeña", price: 5 }
];

// MOSTRAR MENU
let timeOfDay = "dinner";

console.log(`\n=== MENÚ ${timeOfDay.toUpperCase()} ===`);

for (let i = 0; i < menu[timeOfDay].length; i++) {
  console.log(
    `${i + 1}. ${menu[timeOfDay][i].name} - $${menu[timeOfDay][i].price}`
  );
}

console.log("\n=== ACOMPAÑAMIENTOS ===");

for (let i = 0; i < sidesMenu.length; i++) {
  console.log(
    `${i + 1}. ${sidesMenu[i].name} - $${sidesMenu[i].price}`
  );
}

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

function personalizar(item, extra) {
  if (extra === "queso") {
    item.price += 2;
    item.name += " + queso";
  }

  if (extra === "picante") {
    item.price += 1;
    item.name += " + picante";
  }

  if (extra === "doble") {
    item.price += 3;
    item.name += " (doble porción)";
  }

  return item;
}

// SIMULACIÓN PEDIDO
let platoPrincipal = menu[timeOfDay][0];
let side1 = sidesMenu[0];
let side2 = sidesMenu[1];

platoPrincipal = personalizar(platoPrincipal, "queso");

let pedido = [platoPrincipal, side1, side2];

// MOSTRAR PEDIDO
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