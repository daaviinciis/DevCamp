// Menu
const menuPrincipal = [
  { name: "Hamburguesa", price: 12 },
  { name: "Ensalada", price: 10 },
  { name: "Pollo", price: 11 }
];

const segundos = [
  { name: "Pizza", price: 9 },
  { name: "Pasta", price: 8 },
  { name: "Sushi", price: 13 }
];

const postres = [
  { name: "Tarta", price: 5 },
  { name: "Helado", price: 4 },
  { name: "Brownie", price: 6 }
];

// Comentarios
const comentarios = [
  "¡Buena elección!",
  "Eso es delicioso.",
  "Excelente decisión.",
  "Muy popular en el restaurante.",
  "Te va a encantar."
];

function comentarioAleatorio() {
  return comentarios[Math.floor(Math.random() * comentarios.length)];
}

// Buscar plato ignorando mayúsculas y minúsculas
function buscarPlatoPorNombre(lista, nombre) {
  return lista.find(
    item => item.name.toLowerCase() === nombre.toLowerCase()
  );
}

// Inicio
alert("Bienvenido/a al Bottega Diner");

// Plato principal
let textoPrincipal = menuPrincipal
  .map(p => `${p.name} - $${p.price}`)
  .join("\n");

let plato1 = null;

while (!plato1) {
  let input1 = prompt("Elige el plato principal:\n\n" + textoPrincipal);

  plato1 = buscarPlatoPorNombre(menuPrincipal, input1);

  if (!plato1) {
    alert("Ese plato no existe, elige otra vez");
  }
}

alert(comentarioAleatorio());

// Segundo plato
let textoSegundo = segundos
  .map(p => `${p.name} - $${p.price}`)
  .join("\n");

let plato2 = null;

while (!plato2) {
  let input2 = prompt("Elige el segundo plato:\n\n" + textoSegundo);

  plato2 = buscarPlatoPorNombre(segundos, input2);

  if (!plato2) {
    alert("Ese plato no existe, elige otra vez");
  }
}

alert(comentarioAleatorio());

// Postre
let textoPostre = postres
  .map(p => `${p.name} - $${p.price}`)
  .join("\n");

let postre = null;

while (!postre) {
  let input3 = prompt("Elige el postre:\n\n" + textoPostre);

  postre = buscarPlatoPorNombre(postres, input3);

  if (!postre) {
    alert("Ese plato no existe, elige otra vez");
  }
}

alert(comentarioAleatorio());

// Total del pedido
let total = plato1.price + plato2.price + postre.price;

alert(
  "TU PEDIDO:\n\n" +
  "Plato principal: " + plato1.name + " - $" + plato1.price + "\n" +
  "Segundo plato: " + plato2.name + " - $" + plato2.price + "\n" +
  "Postre: " + postre.name + " - $" + postre.price + "\n\n" +
  "TOTAL: $" + total
);