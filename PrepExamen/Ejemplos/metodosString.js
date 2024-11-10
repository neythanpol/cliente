// Método split
let texto = "Hola, mundo, ¿cómo, estás?";
let palabras = texto.split(", ");

console.log(palabras);
// Output: ["Hola", "mundo", "¿cómo", "estás?"]


// Metodo splice
let frutas1 = ["manzana", "plátano", "fresa", "naranja"];

// Eliminar 2 elementos a partir de la posición 1 e insertar "kiwi" y "uva"
frutas.splice(1, 2, "kiwi", "uva");

console.log(frutas);
// Output: ["manzana", "kiwi", "uva", "naranja"]


//Metodo pop
let frutas2 = ["manzana", "plátano", "fresa"];
let ultimaFruta = frutas.pop();
console.log(frutas); // ["manzana", "plátano"]
console.log(ultimaFruta); // "fresa"

// Metodo push
let frutas3 = ["manzana", "plátano"];
let nuevaLongitud1 = frutas.push("fresa");
console.log(frutas); // ["manzana", "plátano", "fresa"]
console.log(nuevaLongitud); // 3


//Metodo shift
let frutas4 = ["manzana", "plátano", "fresa"];
let primeraFruta = frutas.shift();
console.log(frutas); // ["plátano", "fresa"]
console.log(primeraFruta); // "manzana"


// Metodo unshift
let frutas5 = ["plátano", "fresa"];
let nuevaLongitud2 = frutas.unshift("manzana");
console.log(frutas); // ["manzana", "plátano", "fresa"]
console.log(nuevaLongitud); // 3
