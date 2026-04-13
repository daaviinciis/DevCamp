let miLista = ["velma", "exploradora", "jane", "john", "harry"];

// ─── EJERCICIO 1: Con Bucle for ───────────────────────────────
console.log("=== Ejercicio 1: Bucle for ===");
for (let i = 0; i < miLista.length; i++) {
  console.log(miLista[i]);
}

// ─── EJERCICIO 2: Con Bucle while ─────────────────────────────
console.log("=== Ejercicio 2: Bucle while ===");
let contador = 0;
while (contador < miLista.length) {
  console.log(miLista[contador]);
  contador++;
}

// ─── EJERCICIO 3: Función flecha ─────────────────────────
console.log("=== Ejercicio 3: Arrow Function ===");
const holaMundo = () => "Hola mundo";
console.log(holaMundo());