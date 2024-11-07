// Escribe una función que reciba un array de números y devuelva solo los números pares.

function filtrarPares(arr) {
    return arr.filter(numero => numero % 2 === 0);
}

alert(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8]));