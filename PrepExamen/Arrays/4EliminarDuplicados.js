// Escribe una función que reciba un array y devuelva uno nuevo sin elementos duplicados.

function eliminarDuplicados(array) {
    let unicos = [];
    for (let i = 0; i < array.length; i++) {
        if (!unicos.includes(array[i])) {
            unicos.push(array[i]);
        }
    }
    return unicos;
}

alert(eliminarDuplicados([3, 3, 3, 5]));