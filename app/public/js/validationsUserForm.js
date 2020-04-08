/****  Validación del formulario de Creación de usuario (User Form) ****/

// 1. Capturar el formulario y el botón

let form = document.querySelector('#regForm');
let submitButton = document.querySelector('button');

// 2. Capturar los elementos del formulario en formato array
let formElements = Array.from(form.elements);

// 3. Sacar al último elemento que es el botón
formElements.pop();

// * Definir un objeto literal que contendrá los campos con error
let inputsWithErrors = {};

// 4. Iterar sobre el array de campos
for (let oneInput of formElements) 
    // 4a. Validación de campos vaciós - Asignamos el evento blur a cada campo
    {oneInput.addEventListener('blur', function () {
        // 4b. Capturar el valor del campo
        let inputValue = this.value;
            // 4c. Validar si el valor del campo está vacío
            if(validator.isEmpty(inputValue)) {
                // 4c-I. Agregar la clase "is-invalid" y eliminamos la clase "is-valid"
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
                // 4c-II. Al <p> que está inmediatamente después del campo se le agrega el texto de error
                this.nextElementSibling.innerHTML = `El campo <b>${this.dataset.name}</b> es obligatorio`;
                // Agregar al objeto de errores, un error para ese campo
                inputsWithErrors[this.name] = true;
            } else {
                // 4c-III Eliminar la clase "is-invalid"
                this.classList.remove('is-invalid');    
                // 4c-IV Agregar la clase "is-valid"
                this.classList.add('is-valid');
                // 4e-V. Al <p> que está inmediatamente después del campo se le saca el texto
                this.nextElementSibling.innerHTML = '';
                // Eliminar del objeto de errores, el error de ese campo
                delete inputsWithErrors[this.name];

            }

    });

    // 4d. Validar el campo de correo electrónico
    if (oneInput.name === 'email') {
        // 4d-I. Asignar el evento change al campo
        oneInput.addEventListener ('blur', function (){
        //4d-II. Capturar el valor del campo
        var inputEmailValue = this.value; 
        // 4d-III. Validar si NO está vacío y si es NO un formato de correo electrónico
        if (!validator.isEmpty(inputEmailValue) && !validator.isEmail(inputEmailValue)) {
            // 4d-IV. Agregar la clase "is-invalid" y eliminamos la clase "is-valid"
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
            // 4d-V. Al <p> que está inmediatamente después del campo se le agrega el texto de error
            this.nextElementSibling.innerHTML = `Debés ingresar un formato de correo electrónico válido`;

            // Agregar al objeto de errores, un error para ese campo
               inputsWithErrors[this.name] = true;

            }
        })    
        // Evento keypress para validar email en la base
        oneInput.addEventListener('change', function (e) {
            let emailIngresado = this.value;
            if (emailIngresado.length > 2) {
                fetch('http://localhost:3030/api/users')
                    .then(response => response.json())
                    .then(data => {
                         for (const oneData of data.data) {
                            if(oneData.email === emailIngresado)  {
                                this.classList.add('is-invalid');
                                this.classList.remove('is-valid');
                                this.nextElementSibling.innerHTML = `El correo electrónico ingresado ya existe`;
                                inputsWithErrors[this.name] = true;
                            } 
                        }   
                    })                                           
                    .catch(error => console.error(error))
            }    

        })

    }

// 4e. Validar el campo de imagen
if (oneInput.name == 'avatarName') {
// 4e-I. Asignar el evento change
oneInput.addEventListener('change', function () {
    // 4e-II. Sacar la extensión del archivo
    let fileExtension = this.value.split('.').pop();
    // 4e-III. Armar un array de las extensiones aceptadas
    let acceptedExtensions = ['jpg', 'jpeg', 'png', 'webm', 'svg'];
    // 4e-IV. Validar si la extensión es aceptada
    if(!acceptedExtensions.includes(fileExtension)) {
    // 4e-V. Agregar la clase "is-invalid" y eliminamos la clase "is-valid"
    this.classList.add('is-invalid');
    this.classList.remove('is-valid');
    // 4e-VI. Al <p> que está inmediatamente después del campo se le agrega el texto de error
    this.nextElementSibling.innerHTML = `Subiste una imagen no válida. Los formatos para imagen aceptados son: ${acceptedExtensions}`;
    // Agregar al objeto de errores, un error para ese campo
    inputsWithErrors[this.name] = true;

} else {
    // 4e-VI. Eliminar la clase "is-invalid"
    this.classList.remove('is-invalid');
    this.classList.add('is-valid');
    // 4e-VI. Al <p> que está inmediatamente después del campo se le saca el texto
    this.nextElementSibling.innerHTML = '';
    // Eliminar del objeto de errores, el error de ese campo
    delete inputsWithErrors[this.name];
    }
});

}
// 4f. Validar el campo de nombre
if (oneInput.name === 'name') {
    // 4f-I. Asignar el evento blur al campo
    oneInput.addEventListener ('blur', function (){
    //4f-II. Capturar el valor del campo
    let inputNameValue = this.value; 
    // 4f-III. Validar si NO está vacío y si tiene al menos dos caracteres
    if (!validator.isEmpty(inputNameValue) && !validator.isLength(inputNameValue,{min:2, max: 100})) {
        // 4f-IV. Agregar la clase "is-invalid" y eliminamos la clase "is-valid"
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        // 4f-V. Al <p> que está inmediatamente después del campo se le agrega el texto de error
        this.nextElementSibling.innerHTML = `Debés ingresar un nombre que tenga al menos dos letras`;

        // Agregar al objeto de errores, un error para ese campo
           inputsWithErrors[this.name] = true;

        }
    })    
}
// 4g. Validar el campo de contraseña
if (oneInput.name === 'password') {
    // 4g-I. Asignar el evento blur al campo
    oneInput.addEventListener ('blur', function (){
    //4g-II. Capturar el valor del campo
    let inputPasswordValue = this.value; 
    // 4f-III. Validar si NO está vacío y si tiene al menos ocho caracteres
    if (!validator.isEmpty(inputPasswordValue) && !validator.isLength(inputPasswordValue,{min:8, max: 50})) {
        // 4f-IV. Agregar la clase "is-invalid" y eliminamos la clase "is-valid"
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        // 4f-V. Al <p> que está inmediatamente después del campo se le agrega el texto de error
        this.nextElementSibling.innerHTML = `La contraseña debe tener al menos 8 caracteres`;

        // Agregar al objeto de errores, un error para ese campo
           inputsWithErrors[this.name] = true;

        }
    })    
}

}

// 5. Asignar el evento submit al formulario
form.addEventListener('submit', function (e) {
    // 5a Iterar el array de campos para ver si hay alguno vacío
    formElements.forEach(function (oneInput) {
        if (validator.isEmpty(oneInput.value)) {
            inputsWithErrors[oneInput.name] = true;
            oneInput.classList.add('is-invalid');
            oneInput.nextElementSibling.innerHTML = 'Campo obligatorio';
        }
    });

    console.table(inputsWithErrors);

    // 5b. Evitar que se dispare el evento si el objeto inputsWithErrors tiene cosas
    if(Object.keys(inputsWithErrors).length > 0) {
        e.preventDefault();
    }
})



