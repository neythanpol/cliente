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
            <td>${this.#sueldo}</td>
            </tr>`;
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

function cabecera() {
    tabla.innerHTML = `
        <thead>
            <tr>
                <th id="nombre-tabla">Nombre</th>
                <th id="apellido-tabla">Apellido</th>
                <th id="nacimiento-tabla">Nacimiento</th>
                <th id="sueldo-tabla">Sueldo</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    document.querySelector("#nombre-tabla").addEventListener("click", () => {
        empleados.sort((a, b) => a.getNombre().localeCompare(b.getNombre()));
        actualizar();
    });

    document.querySelector("#apellido-tabla").addEventListener("click", () => {
        empleados.sort((a, b) => a.getApellido().localeCompare(b.getApellido()));
        actualizar();
    });

    document.querySelector("#nacimiento-tabla").addEventListener("click", () => {
        empleados.sort((a, b) => a.getNacimiento().localeCompare(b.getNacimiento()));
        actualizar();
    });

    document.querySelector("#sueldo-tabla").addEventListener("click", () => {
        empleados.sort((a, b) => a.getSueldo().localeCompare(b.getSueldo()));
        actualizar();
    });
}

function actualizar() {
    const tbody = tabla.querySelector("tbody");
    tbody.innerHTML = "";

    empleados.forEach(empleado => {
        tbody.innerHTML += empleado.toString();
    });

    const filas = document.querySelectorAll("td");
    filas.forEach(fila => {
        fila.setAttribute("style", "border: solid 1px black; padding: 10px; text-align:center");
    });
}

cabecera();
actualizar();

/*
empleados.forEach(empleado => {
    tabla.innerHTML = empleados;
})


document.getElementById('nombre-tabla').addEventListener('click', () => {
    empleados = ordenarPorNombre(empleados);
    mostrarEmpleados(empleados);
});


function ordenarPorNombre(empleados) {
    return empleados.sort((a, b) => a.nombre.localeCompare(b.nombre));
}
*/
