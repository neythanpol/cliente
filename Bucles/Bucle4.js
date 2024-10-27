var numero = parseInt(prompt("Dime un numero: "));
primo = true;

if (1 <= numero & numero <= 10000) {
    for (i = 2; i < numero; i++) {

        if (numero % i == 0) {

            primo = false;

        }
    }
    if (numero == 1) {

        primo = false;

    }

    if (primo == true) {

        alert("Si")

    } else {

        alert("No")

    }

} else {

    alert("Ese numero no es válido")
    
}


