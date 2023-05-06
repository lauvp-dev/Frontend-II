window.addEventListener("load", function () {
    const formulario = document.querySelector("form");
    const inputNombre = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputContrasenia = document.querySelector("#pass");
    const check = document.getElementsByName("agree");
    const mensajeNombre = this.document.querySelector('#mensajeNombre');
    const mensajeEmail = this.document.querySelector('#mensajeEmail');
    const mensajePass = this.document.querySelector('#mensajePass');
    const mensajeCheck = this.document.querySelector('#mensajeCheck');
    const botonSubmit = document.querySelectorAll('form button');
    const datosUsuario = {
        nombre: "",
        email: "",
        contrasenia: "",
        check: [],
    };

    /* --------------------------- Validación dinámica -------------------------- */
    //Valido Nombre
    inputNombre.addEventListener('blur', function () {
        datosUsuario.nombre = inputNombre.value;
        if (!validarNombre(datosUsuario.nombre)) {
            // mostrar el error al usuario
            inputNombre.classList.add('error');
            mensajeNombre.classList.remove('oculto');
        } else {
            inputNombre.classList.remove('error');
            mensajeNombre.classList.add('oculto');
        }
    });

    //Valido Email
    inputEmail.addEventListener('blur', function () {
        datosUsuario.email = inputEmail.value;
        if (!validarEmail(datosUsuario.email)) {
            // mostrar el error al usuario
            inputEmail.classList.add('error');
            mensajeEmail.classList.remove('oculto');
        } else {
            inputEmail.classList.remove('error');
            mensajeEmail.classList.add('oculto');
        }
    });

    //Valido Contraseña
    inputContrasenia.addEventListener('blur', function () {
        datosUsuario.contrasenia = inputContrasenia.value;
        if (!validarPass(datosUsuario.contrasenia)) {
            // mostrar el error al usuario
            inputContrasenia.classList.add('error');
            mensajePass.classList.remove('oculto');
        } else {
            inputContrasenia.classList.remove('error');
            mensajePass.classList.add('oculto');
        }
    });

    //Escucho cualquier cambio en el formulario para evaluar si habilito o no los botones de Submit
    formulario.addEventListener('change', function (e) {
        console.log(datosUsuario);

        let listadoChecks = [];
        check.forEach(box => {
            if (box.checked) {
                listadoChecks.push(box.id)
            };
        })

        //Valido casilla de aceptación de Terms & Privacy Policy
        datosUsuario.check = listadoChecks;

        if (datosUsuario.check.length == 0) {
            // mostrar el error al usuario
            mensajeCheck.classList.remove('oculto');
        } else {
            mensajeCheck.classList.add('oculto');
        }

        //Validación completa
        if (validarNombre(datosUsuario.nombre) && validarEmail(datosUsuario.email) && validarPass(datosUsuario.contrasenia) && (datosUsuario.check.length != 0)) {
            botonSubmit.forEach(btn => {
                btn.removeAttribute('disabled');
            })
        } else {
            botonSubmit.forEach(btn => {
                btn.setAttribute('disabled', '');
            })
        }

    });

    formulario.addEventListener("submit", function (evento) {
        //Frenamos el envío por defecto
        evento.preventDefault();

        console.log("SUBMIT");

        /* ------------------------------ Normalización ----------------------------- */
        console.log(
            normalizar(
                datosUsuario.nombre,
                datosUsuario.email,
                datosUsuario.contrasenia,
                datosUsuario.check
            )
        );
    });

    /* ------------------------------ Validaciones ------------------------------ */
    function validarNombre(nombre) {
        let resultado = true;

        // 1er Condición: no debe contener caracteres especiales o números
        if (!validarStringNombre(nombre)) {
            resultado = false;
        }

        // 2da Condición: debe tener mínimo 3 y máximo de 25 caracteres
        if (nombre.length < 3 || nombre.length > 25) {
            resultado = false;
        }

        return resultado;
    };

    function validarEmail(email) {
        let resultado = true;

        // Debe contener @ y .
        if (!validarStringEmail(email)) {
            resultado = false;
        }

        return resultado;
    };

    function validarPass(contrasenia) {
        let resultado = true;

        // Debe tener mínimo 8 y máximo de 20 caracteres
        if (contrasenia.length < 8 || contrasenia.length > 25) {
            resultado = false;
        }

        return resultado;
    };

    /* --------------------------- Chequeos de Strings -------------------------- */
    function validarStringNombre(string) {
        let resultado = true;

        let caracteresValidos = [" ", "a", "á", "b", "c", "d", "e", "é", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "ñ", "o", "ó", "p", "q", "r", "s", "t", "u", "ú", "v", "w", "x", "y", "z", "A", "Á", "B", "C", "D", "E", "É", "F", "G", "H", "I", "Í", "J", "K", "L", "M", "N", "Ñ", "O", "Ó", "P", "Q", "R", "S", "T", "U", "Ú", "V", "W", "X", "Y", "Z"];

        for (const i of string) {
            if (caracteresValidos.indexOf(i) == -1) {
                resultado = false;
            }
        }

        return resultado;
    }

    function validarStringEmail(string) {
        let resultado = true;

        if ((string.indexOf(".") == -1) || (string.indexOf("@") == -1)) {
            resultado = false;
        }

        return resultado;
    }

    /* ------------------------------ Normalización ----------------------------- */
    function normalizar(nom, email, pass, listadoChecks) {
        const datos = {
            name: nom.toUpperCase(),
            email: email,
            password: pass,
            checks: listadoChecks,
        };

        return datos;
    }

});