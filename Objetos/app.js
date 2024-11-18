"use strict"

class Empleado{
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;

    constructor(nombre, apellido, nacimiento, sueldo) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
    }
    toString() {
        return `<tr>
                    <td>${this.#nombre}</td>
                    <td>${this.#apellido}</td>
                    <td>${this.#nacimiento}</td>
                    <td>${this.#sueldo}</td></tr>`;
    }

    getNombre() {
        return this.#nombre;
    } 
    getApellido() {
        return this.#apellido;
    }
    getEdad() {
        return this.#nacimiento;
    }
    getSueldo() {
        return this.#sueldo;
    }
}

let empleados = [
    new Empleado("Paco", "Fiestas", 1997, 33000),
    new Empleado("Chindas", "Vinto", 2001, 27000),
    new Empleado("Juan", "Cruz", 1772, 38000),
    new Empleado("Misty", "Perez", 1991, 74000),
    new Empleado("Joan", "Laporta", 1987, 37000),
    new Empleado("Sabrina", "Carpenter", 2001, 20000),
    new Empleado("Eulalio", "Fernandez", 1999, 54000),
];

let tabla = document.getElementById("lista-empleados");

empleados.forEach(empleado => {
        tabla.innerHTML += empleado;
    }
);

let ascendenteNombre = true;

function ordenaNombre() {
    if (ascendenteNombre) {
        // Ordenar de forma ascendente
        empleados.sort((a, b) => {
            if (a.getNombre() > b.getNombre()) return 1;
            if (a.getNombre() < b.getNombre()) return -1;
            return 0;
        });
    } else {
        // Ordenar de forma descendente
        empleados.sort((a, b) => {
            if (a.getNombre() < b.getNombre()) return 1;
            if (a.getNombre() > b.getNombre()) return -1;
            return 0;
        });
    }

    // Cambiar el estado del orden
    ascendenteNombre = !ascendenteNombre;

    // Actualizar la tabla
    tabla.innerHTML = "";
    empleados.forEach(empleado => {
        tabla.innerHTML += empleado.toString(); 
    });
}

let ascendenteApellido = true;

function ordenaApellido() {
    if (ascendenteApellido) {
        // Ordenar de forma ascendente
        empleados.sort((a, b) => {
            if (a.getApellido() > b.getApellido()) return 1;
            if (a.getApellido() < b.getApellido()) return -1;
            return 0;
        });
    } else {
        // Ordenar de forma descendente
        empleados.sort((a, b) => {
            if (a.getApellido() < b.getApellido()) return 1;
            if (a.getApellido() > b.getApellido()) return -1;
            return 0;
        });
    }

    // Cambiar el estado del orden
    ascendenteApellido = !ascendenteApellido;

    // Actualizar la tabla
    tabla.innerHTML = "";
    empleados.forEach(empleado => {
        tabla.innerHTML += empleado.toString(); 
    });
}

let ascendenteEdad = true;

function ordenaEdad() {
    if (ascendenteEdad) {
        // Ordenar de menor a mayor
        empleados.sort((a, b) => a.getEdad() - b.getEdad());
    } else {
        // Ordenar de mayor a menor
        empleados.sort((a, b) => b.getEdad() - a.getEdad());
    }

    // Cambiar el estado del orden
    ascendenteEdad = !ascendenteEdad;

    // Actualizar la tabla
    tabla.innerHTML = "";
    empleados.forEach(empleado => {
        tabla.innerHTML += empleado.toString(); 
    });
}


let ascendenteSueldo = true; 

function ordenaSueldo() {
    if (ascendenteSueldo) {
        // Ordenar de menor a mayor
        empleados.sort((a, b) => a.getSueldo() - b.getSueldo());
    } else {
        // Ordenar de mayor a menor
        empleados.sort((a, b) => b.getSueldo() - a.getSueldo());
    }

    // Cambiar el estado del orden
    ascendenteSueldo = !ascendenteSueldo;

    // Actualizar la tabla
    tabla.innerHTML = "";
    empleados.forEach(empleado => {
        tabla.innerHTML += empleado.toString(); 
    });
}
