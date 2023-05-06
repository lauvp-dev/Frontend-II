/* ------------------------ Declaro las variables ------------------------ */
const formulario = document.forms[0];
const inputComentario = document.querySelector("#comentario");
const cajaComentarios = document.querySelector(".comentarios");
const verMas = document.querySelector('#verMas')
let listadoComentarios = [];

/* -------- Chequeo si existe algo previamente guardado en storage ------- */
const comentariosPrevios = JSON.parse(localStorage.getItem('comentariosAlmacenados'));

if(comentariosPrevios!=null){
    listadoComentarios = comentariosPrevios;
    renderizarComentarios(listadoComentarios);
}

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    guardarComentario(inputComentario.value);
    console.log(listadoComentarios);
    renderizarComentarios(listadoComentarios);
    inputComentario.value="";
})

formulario.addEventListener("reset", function(){
    while(listadoComentarios.length > 0) {
        listadoComentarios.pop();
    }
    cajaComentarios.innerHTML = "";
    borrarHistorial(comentariosPrevios);
    console.log(listadoComentarios);
})

/* -------------------------------------------------------------------------- */
/*                          Funcionalidad de guardar                          */
/* -------------------------------------------------------------------------- */
function guardarComentario(comentario){
    listadoComentarios.unshift(comentario);
    localStorage.setItem('comentariosAlmacenados', JSON.stringify(listadoComentarios));
}

/* -------------------------------------------------------------------------- */
/*                         Funcionalidad de renderizar                        */
/* -------------------------------------------------------------------------- */
function renderizarComentarios(listado){
    cajaComentarios.innerHTML = "";
        
    //Chequeo que el array a renderizar no exceda un máximo de comentarios
    let cantidadComentarios = 5;
    
    if(listado.length<=cantidadComentarios)
        cantidadComentarios=listado.length;
    else
        verMas.classList.remove('oculto');

    for(let i=0; i<cantidadComentarios; i++){
        cajaComentarios.innerHTML += `<p>${listado[i]}</p>`
    }
};

/* -------------------------------------------------------------------------- */
/*                     Funcionalidad de borrar el historial                    */
/* -------------------------------------------------------------------------- */
function borrarHistorial(listado){
    listado = [];
    localStorage.clear();
    verMas.classList.add('oculto');
};