// Escribe una función que reciba un array de números y devuelva la suma de todos sus elementos.

function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

alert(sumaArray([1, 2, 3, 4]));