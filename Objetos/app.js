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
                    <td>${this.#sueldo}</td>`;
    }

    get nombre() {
        return this.#nombre;
    } 
    get apellido() {
        return this.#apellido;
    }
    get nacimiento() {
        return this.#nacimiento;
    }
    get sueldo() {
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
]

let tabla = document.getElementById("lista-empleados");
empleados.forEach(empleado => {
    tabla.innerHTML = empleados;
})

/*
document.getElementById('nombre-tabla').addEventListener('click', () => {
    empleados = ordenarPorNombre(empleados);
    mostrarEmpleados(empleados);
});


function ordenarPorNombre(empleados) {
    return empleados.sort((a, b) => a.nombre.localeCompare(b.nombre));
}
    */
