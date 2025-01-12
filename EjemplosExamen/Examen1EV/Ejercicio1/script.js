"use strict"

// Natan Blanco Rodríguez

// Función para renderizar una tarea
function renderTarea(tarea) {
    const listaTarea = document.createElement('li');
    // Creamos la tarea con su checkbox, nombre y botón de borrar tarea
    listaTarea.innerHTML = `
        <input type="checkbox" ${tarea.completada ? 'checked' : ''}>
        <span>${tarea.nombre}</span>
        <button class="borrar-tarea">Borrar tarea</button>
    `;
    return listaTarea; // Devolvemos la tarea
}

// Función para renderizar la lista de tareas completas
function renderTareas() {
    const lista = document.getElementById('lista');
    const almacenamiento = window.localStorage;
    const tareas = JSON.parse(almacenamiento.getItem('tareas')) || [];
    
    // Vacía la lista antes de agregar las tareas
    lista.innerHTML = '';
    
    // Crea y agrega un elemento li para cada tarea en la lista
    tareas.forEach((tarea) => {
        const listaTarea = renderTarea(tarea);
        lista.appendChild(listaTarea);
        
        // Evento click al botón de borrar tarea
        const borrarTarea = listaTarea.querySelector('.borrar-tarea');
        borrarTarea.addEventListener('click', () => {
            tareas.splice(tareas.indexOf(tarea), 1);
            almacenamiento.setItem('tareas', JSON.stringify(tareas));
            renderTareas();
        });
        
        // Evento click al checkbox de la tarea
        const checkbox = listaTarea.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            tarea.completada = checkbox.checked;
            almacenamiento.setItem('tareas', JSON.stringify(tareas));
            renderTareas();
        });
    });
}

// Cargar las tareas existentes al iniciar el programa
window.onload = () => {
    const almacenamiento = window.localStorage;
    const tareas = JSON.parse(almacenamiento.getItem('tareas')) || [];
    
    // Evento click a añadir tarea
    document.getElementById('add-task').addEventListener('click', () => {
        const tareaInput = document.getElementById('tarea');
        const tareaNombre = tareaInput.value.trim();
        
        if (tareaNombre) {
            const nuevaTarea = { nombre: tareaNombre, completada: false };
            tareas.push(nuevaTarea);
            almacenamiento.setItem('tareas', JSON.stringify(tareas));
            renderTareas();
            tareaInput.value = '';
        }
    });
    
    // Renderiza la lista de tareas pendientes
    renderTareas();
};