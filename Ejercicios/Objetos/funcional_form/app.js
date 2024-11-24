// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const formContainer = document.getElementById('form-container');

    // Crear el formulario
    const form = document.createElement('form');
    
    // Crear los elementos del formulario
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nombre:';
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'nombre');
    nameInput.setAttribute('placeholder', 'Ingresa tu nombre');
    form.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'Ingresa tu email');
    form.appendChild(emailInput);

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Contraseña:';
    form.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    passwordInput.setAttribute('placeholder', 'Ingresa tu contraseña');
    form.appendChild(passwordInput);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Enviar';
    form.appendChild(submitButton);

    // Agregar el formulario al contenedor
    formContainer.appendChild(form);
});
