// Transforma multiplicando por 2

[1, 2, 3].map(n => n * 2); // Resultado = [2, 4, 6]

// Filtra el número que no sea 4

[2, 4, 6, 8].filter(n => n !== 4); // Resultado = [2, 6, 8]

// Encuentra y devuelve el número 7

[1, 3, 5, 7, 9].find(n => n == 7); // Resultado = 7

// Dime dónde está el número 10

[5, 10, 15, 20, 25].findIndex(n => n == 10); // Resultado = 1

// ¡Rellena el array con tu nombre!

['', '', ''].fill('Natan'); // Resultado = ['Natan', 'Natan', 'Natan']
// Nota extra. También puedes colocar un número tal cuál lo tengo así y te lo rellenas con números, no con strings de números
// Nota extra. Puedes elegir el número de veces que se repite. Por ejemplo con esta función:
function generarCuadrado(num) {
    return Array(num).fill('*'.repeat(num)).join('\n')
}
generarCuadrado(5);

// ¿Todos son números pares?

[2, 4, 6, 9].every(n => n % 2 == 0); // Resultado = false

// ¿Hay algún 4?

[2, 3, 4, 5].some(n => n == 4); // Resultado = true


// Más ejemplos con find

let arr = [
    {id: 1, nombre: 'JavaScript'},
    {id: 2, nombre: 'React'},
    {id: 3, nombre: 'JavaScript'}
];

let js = arr.find(item => item.nombre === 'JavaScript'); // Nos devuelve el primer valor encontrado, en este caso: {id: 1, nombre: 'JavaScript'}
// Nota extra. Filter nos devolvería un array con todos los elementos que coinciden, en este caso: {id: 1, nombre: 'JavaScript'} {id: 3, nombre: 'JavaScript'}


// Operador ternario

const mayorEdad = 18;
edad >= 18 ? 'Mayor de edad' : 'Menor de edad';

// Combinar arrays

const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = [...arr1, ...arr2]; // Devuelve [1, 2, 3, 4]