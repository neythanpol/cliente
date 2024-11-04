// Modificar el texto de un elemento
const titulo = document.getElementById("titulo");
titulo.textContent = "Hola desde Javascript";

// Cambiar el color de texto de un elemento
const parrafo = document.getElementById("parrafo");
parrafo.style.color = "blue";

// Cambiar el texto al hacer clic en un botón
const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    parrafo.textContent = "Has hecho clic en el botón";
});

// Crear un Nuevo Elemento en el DOM
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo añadido con Javascript";
document.body.appendChild(nuevoParrafo);

// Alternar estilos con un botón
boton.addEventListener("click", () => {
    if (parrafo.style.backgroundColor === "red") {
        parrafo.style.backgroundColor = "green";
    }else if (parrafo.){

    }
    
    else{
        parrafo.style.backgroundColor = "red";
    }
});