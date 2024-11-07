// Escribe una función que reciba un array y devuelva uno nuevo con los elementos en orden inverso.

function invertirArray(array) {
    let arrayInverso = [];
    let cont = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        arrayInverso[i] = array[cont];
        cont--;
    }
    return arrayInverso;
}

alert(invertirArray([11, 5, 3 ,18, 46, 31]));