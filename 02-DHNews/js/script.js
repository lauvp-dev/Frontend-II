//Dark-Mode:
const boton = document.querySelector(".theme button");

function cambiarTema() {
    const tema = document.body.classList.toggle("dark");

    if (tema) {
        boton.innerHTML = 'Cambiar Tema <i class="fas fa-sun"></i>';
    } else {
        boton.innerHTML = 'Cambiar Tema <i class="fas fa-moon"></i>';
    }
}

//Aplicando Template Literals:
renderizarItems();

function renderizarItems() {
    let contenedor = document.querySelector(".contenedor");
    for (let i = 0; i < noticias.length; i++) {
        if (noticias[i].tipoNacional) {
            contenedor.innerHTML = contenedor.innerHTML +
                `
                <div class="fondo">
                    <div class="card">
                        <div class="texto">
                            <h3>${noticias[i].tipoNacional ? "Noticia Nacional" : "Noticia Internacional"}</h3>
                            <h2>${noticias[i].titulo}</h2>
                            <p>${noticias[i].descripcion}</p>
                        </div>
                        <img src="${noticias[i].imgUrl}">
                    </div>
                </div>
                `;
        } else {
            contenedor.innerHTML = contenedor.innerHTML +
                `
                <div class="fondo internacional">
                    <div class="card ">
                        <div class="texto">
                            <h3>${noticias[i].tipoNacional ? "Noticia Nacional" : "Noticia Internacional"}</h3>
                            <h2>${noticias[i].titulo}</h2>
                            <p>${noticias[i].descripcion}</p>
                        </div>
                        <img src="${noticias[i].imgUrl}">
                    </div>
                </div>
                `;
        }
    }
}