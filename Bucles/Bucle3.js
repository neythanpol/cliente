var nota = 0;
var diez = false;

while (nota != -1) {

    if (nota >= 0 & nota <= 10) {
        if (nota == 10) {
            diez = true;
        }
    } else {
        alert("Ese numero no es válido");
    }

    nota = parseInt(prompt("Dime una nota: (de 0 a 10, para salir ponga -1) "));
}

if (diez == true) {
    alert("Si")
} else {
    alert("No")
}
