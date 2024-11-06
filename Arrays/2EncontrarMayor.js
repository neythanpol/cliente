// Dado un array de números, escribe una función que devuelva el número más grande del array.

function mayorArray(numeros) {
    let num = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (num < numeros[i]) {
            num = numeros[i];
        }
    }
    return num;
}

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "El número más grande es: " + mayorArray([3, 7, 23, 14, 63, 4]);
document.body.appendChild(nuevoParrafo);