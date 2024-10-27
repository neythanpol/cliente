var numero = parseInt(prompt("Dime un numero: "));

var numero2 = parseInt(prompt("Dime el numero hasta que quieras que te muestre: "));

for (i = 1; i <= numero2; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
}
alert("PULSA F12 PARA VER EL RESULTADO");
