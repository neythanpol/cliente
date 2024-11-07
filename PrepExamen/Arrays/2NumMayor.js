// Escribe una función que reciba un array de números y devuelva el número mayor.

function mayor(array) {
    let numMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (numMayor < array[i]) {
            numMayor = array[i]
        }
    }
    return numMayor;
}

alert(mayor([3, 4, 5]));