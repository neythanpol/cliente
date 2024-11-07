// Escribe una función que reciba dos arrays y devuelva uno nuevo con los elementos que aparecen en ambos.

function elementosComunes(arr1, arr2) {
    let arrNuevo = [];
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arrNuevo.push(arr1[i])
        }
    }
    return arrNuevo;
}

alert(elementosComunes([1, 3, 3, 36, 28, 14], [1, 2, 3, 4, 6, 8, 10, 12, 14, 26, 3]));