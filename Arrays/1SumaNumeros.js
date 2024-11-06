// Dado un array de números, crea una función que devuelva la suma de todos los elementos.

function sumaNumeros(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "La suma es: " + sumaNumeros([3, 7, 23, 14, 63, 4]);
document.body.appendChild(nuevoParrafo);