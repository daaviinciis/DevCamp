// Menu
const menus = {
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
    { name: "Pizza", price: 12 },
    { name: "Pasta", price: 11 },
    { name: "Sushi", price: 13 }
  ]
};

const segundos = {
  breakfast: [
    { name: "Yogur", price: 3 },
    { name: "Fruta", price: 2 },
    { name: "Café", price: 2 }
  ],
  lunch: [
    { name: "Patatas fritas", price: 4 },
    { name: "Sopa", price: 3 },
    { name: "Ensalada pequeña", price: 5 }
  ],
  dinner: [
    { name: "Patatas bravas", price: 5 },
    { name: "Pan de ajo", price: 4 },
    { name: "Croquetas", price: 6 }
  ]
};

const postres = {
  breakfast: [
    { name: "Croissant", price: 3 },
    { name: "Muffin", price: 4 },
    { name: "Donut", price: 3 }
  ],
  lunch: [
    { name: "Tarta", price: 5 },
    { name: "Helado", price: 4 },
    { name: "Flan", price: 4 }
  ],
  dinner: [
    { name: "Brownie", price: 6 },
    { name: "Cheesecake", price: 7 },
    { name: "Helado", price: 4 }
  ]
};

// Comentarios
const comentarios = [
  "Buena elección",
  "Muy buena opción",
  "Eso está delicioso",
  "Excelente decisión",
  "Te va a encantar"
];

// Funciones
function comentarioAleatorio() {
  return comentarios[Math.floor(Math.random() * comentarios.length)];
}

function buscarPlato(lista, nombre) {
  return lista.find(
    item => item.name.toLowerCase() === nombre.toLowerCase()
  );
}

function obtenerHorario(hora) {
  if (hora >= 6 && hora < 12) return "breakfast";
  if (hora >= 12 && hora < 18) return "lunch";
  return "dinner";
}

function hacerPedido() {

  let hora = parseInt(
    prompt("Bienvenido/a!! Por favor introduzca una hora con el formato hh/mm (24 horas)")
  );

  if (isNaN(hora) || hora < 0 || hora > 23) {
    alert("Hora inválida");
    return;
  }

  let horario = obtenerHorario(hora);

  let nombreMenu =
    horario === "breakfast"
      ? "DESAYUNO"
      : horario === "lunch"
      ? "COMIDA"
      : "CENA";

  let textoBienvenida =
    "Bienvenido/a!!\n\n" +
    "El menú que le corresponde es el MENU " + nombreMenu + "\n\n" +
    "PRINCIPAL:\n" +
    menus[horario].map(p => "- " + p.name + " ($" + p.price + ")").join("\n") +
    "\n\nSECUNDARIO:\n" +
    segundos[horario].map(p => "- " + p.name + " ($" + p.price + ")").join("\n") +
    "\n\nPOSTRE:\n" +
    postres[horario].map(p => "- " + p.name + " ($" + p.price + ")").join("\n");

  alert(textoBienvenida);

  let menuPrincipal = menus[horario];
  let menuSecundario = segundos[horario];
  let menuPostre = postres[horario];

  let textoPrincipal = menuPrincipal
    .map(p => `${p.name} - $${p.price}`)
    .join("\n");

  let plato1 = null;

  while (!plato1) {
    let input = prompt("Elige plato principal:\n\n" + textoPrincipal);
    if (input === null) return;

    plato1 = buscarPlato(menuPrincipal, input);
    if (!plato1) alert("Ese plato no existe");
  }

  alert(comentarioAleatorio());

  let textoSegundo = menuSecundario
    .map(p => `${p.name} - $${p.price}`)
    .join("\n");

  let plato2 = null;

  while (!plato2) {
    let input = prompt("Elige segundo plato:\n\n" + textoSegundo);
    if (input === null) return;

    plato2 = buscarPlato(menuSecundario, input);
    if (!plato2) alert("Ese plato no existe");
  }

  alert(comentarioAleatorio());

  let textoPostre = menuPostre
    .map(p => `${p.name} - $${p.price}`)
    .join("\n");

  let postre = null;

  while (!postre) {
    let input = prompt("Elige postre:\n\n" + textoPostre);
    if (input === null) return;

    postre = buscarPlato(menuPostre, input);
    if (!postre) alert("Ese plato no existe");
  }

  alert(comentarioAleatorio());

// EXTRAS
let extras = [];
let extraTotal = 0;

let opcionExtra = prompt("¿Quieres añadir extras? (si/no)");

if (opcionExtra && opcionExtra.toLowerCase() === "si") {

  let inputExtras = prompt(
    "Seleccione algún extra (mínimo 2)\n" +
    "Separe cada uno con una coma\n\n" +
    "Opciones disponibles:\n" +
    "- patatas (1€)\n" +
    "- aros de cebolla (2€)\n" +
    "- nachos (2.5€)\n" +
    "- aceituna (1€)\n\n" +
    "Ejemplo: patatas, nachos"
  );

  if (inputExtras) {

    extras = inputExtras
      .split(",")
      .map(e => e.trim().toLowerCase());

    if (extras.length < 2) {
      alert("Debes elegir al menos 2 extras");
    } else {

      extras.forEach(extra => {

        if (extra === "patatas") extraTotal += 1;
        else if (extra === "aros de cebolla") extraTotal += 2;
        else if (extra === "nachos") extraTotal += 2.5;
        else if (extra === "aceituna") extraTotal += 1;

      });
    }
  }
  }

  let total =
    plato1.price +
    plato2.price +
    postre.price +
    extraTotal;

  alert(
    "TU PEDIDO\n\n" +
    "Plato principal: " + plato1.name + " - $" + plato1.price + "\n" +
    "Segundo plato: " + plato2.name + " - $" + plato2.price + "\n" +
    "Postre: " + postre.name + " - $" + postre.price + "\n" +
    (extras.length ? "Extras: " + extras.join(", ") + " - $" + extraTotal + "\n" : "") +
    "\nTOTAL: $" + total
  );
}

hacerPedido();