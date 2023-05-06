window.addEventListener('load', function () {

    /* -------------------------------- variables ------------------------------- */
    let contador = 0;
    let cronometro;
    let tiempo = 1000;
    let multiplicador = 1;
    const valor = document.querySelector('#valor');
    const btnIniciar = document.querySelector('#iniciar');
    const btnStop = document.querySelector('#stop');
    const btnPausa = document.querySelector('#pausa');
    const btnAcelerar= document.querySelector('#acelerar');
    const times = document.querySelector('#times');

    /* -------------------------------- LISTENERS ------------------------------- */
    btnIniciar.addEventListener('click', function (e) {
        console.log("click");
        play();
    });
    btnStop.addEventListener('click', reiniciar);
    btnPausa.addEventListener('click', pausar);
    btnAcelerar.addEventListener('click', acelerar);


    /* -------------------------------------------------------------------------- */
    /*                                  FUNCIONES                                 */
    /* -------------------------------------------------------------------------- */
    //definimos la funcionalidad de iniciar el cronometro
    function play() {
        cronometro = setInterval(function () {
            contador++;
            console.log(contador);
            renderizar();
        }, tiempo);
    };

    // difinimos la responsabilidad de la funcion renderizar
    function renderizar() {
        valor.innerText = contador;
    }

    // definimos la funcion de pausar
    function pausar() {
        clearInterval(cronometro);
    }

    // definimos la funcionalidad del boton stop
    function reiniciar() {
        clearInterval(cronometro);
        times.innerHTML += `<small>Tiempo: ${contador}</small>`
        contador = 0;
        modificador =1;
        tiempo = 1000;
        btnAcelerar.innerText = `x2`;
        renderizar();
    }

    // definimos la funcionalidad de acelerar
    // - duplicar la velocidad del cronometro
    // - que se puede seguir multiplicando(duplicando la velocidad)
    // - impacata en el numero del boton
    function acelerar() {
        tiempo /= 2;
        multiplicador *=2;
        pausar();
        play();
        btnAcelerar.innerText = `x${multiplicador}`;
    }

});