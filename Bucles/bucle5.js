var dinero = parseInt(prompt("Dime cantidad de dinero: "));
var contadorBilletes = 0;

if( dinero % 5 == 0){

    while(dinero != 0){

        contadorBilletes += Math.trunc(dinero/500);
        dinero = dinero%500;
        contadorBilletes += Math.trunc(dinero/200);
        dinero = dinero%200;
        contadorBilletes += Math.trunc(dinero/100);
        dinero = dinero%100;
        contadorBilletes += Math.trunc(dinero/50);
        dinero = dinero%50;
        contadorBilletes += Math.trunc(dinero/20);
        dinero = dinero%20;
        contadorBilletes += Math.trunc(dinero/10);
        dinero = dinero%10;
        contadorBilletes += Math.trunc(dinero/5);
        dinero = dinero%5;

    }

    alert("Su cambio es de "+ contadorBilletes + " billetes");

}else { 
    alert("Esa cantidad no es valida")
}