var bucle = parseInt(prompt("Cuantos numeros vas a darme: "));
var numero = parseInt(prompt("Dime un numero 1: "));
numMax = numero;
numMin = numero;

for(i=2; i <= bucle;i++){
    numero = parseInt(prompt("Dime un numero " + i + ":"));
    
    if(numero < numMin){
        numMin = numero;
    }
    if(numero > numMax){
        numMax = numero;
    }
}
alert (numMax + " " + numMin);