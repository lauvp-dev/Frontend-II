//Bienvenida:
let eleccionJuego = prompt("¡Bienvenid@! 🤗 ¿A qué te gustaría jugar? Las opciones son: (1) Tragamonedas (2) Lotería (3) Ruleta");
let confirmacion, pregunta;
const aciertosRandom = (max, min) => parseInt(Math.random() * (max - min) + min) // Retorna un número aleatorio entre min (incluido) y max (excluido)

while ((eleccionJuego !== "1") && (eleccionJuego !== "2") && (eleccionJuego !== "3") && (confirmacion !== false)){
    confirmacion = confirm("La opción ingresada no es correcta. Por favor, ingrese: 1, 2 ó 3. Si desea salir, presione Cancelar. ¡Muchas gracias!");
    if (confirmacion)
        eleccionJuego = prompt("¡Bienvenid@! 🤗 ¿A qué te gustaría jugar? Las opciones son: (1) Tragamonedas (2) Lotería (3) Ruleta");
    else
        pregunta = false;
}

if (eleccionJuego === "1"){
    //Tragamonedas:
    const premioTotal = 2500;
    const casillas = 10;
    
    pregunta = confirm(`🤩 Querés jugar al Tragamonedas por $${premioTotal}? 🤩`);

    if (pregunta) {
        alert(calcular(aciertosRandom(casillas+1, 0)));
        let volverAJugar = confirm("¿Querés volver jugar al Tragamonedas? 🎰");
        while (volverAJugar){
            alert(calcular(aciertosRandom(casillas+1, 0)));
            volverAJugar = confirm("¿Querés volver jugar al Tragamonedas? 🎰");
        }
        pregunta = false;
    }

    function calcular(aciertos) {
        const proporcion = aciertos / casillas;
        let montoPremio = premioTotal * proporcion;
        return `🤑 Has acertado ${aciertos} de ${casillas} casillas y por lo tanto, has ganado $${montoPremio} 🤑`;
    }
}
else if (eleccionJuego==="2"){
    //Lotería:
    const premios = ["$100", "$1.000", "$10.000", "$100.000"];

    pregunta = confirm(`🤩 Querés jugar a la Lotería? 🤩`);

    if (pregunta) {
        let sueño = prompt("Ingrese el objeto o lugar con el que soñó hoy... 😴")
        alert(resultadoLoteria(sueño));
        let volverAJugar = confirm("¿Querés volver jugar a la Lotería?");
        while (volverAJugar){
            sueño = prompt("Ingrese el objeto o lugar con el que soñó hoy... 😴");
            alert(resultadoLoteria(sueño));
            volverAJugar = confirm("¿Querés volver jugar a la Lotería?");
        }
        pregunta = false;
    }

    function resultadoLoteria(sueño) {
        let nro = aciertosRandom(premios.length,0);
        return `🤑 Tu sueño fue: "${sueño.toUpperCase()}" y por lo tanto, has ganado ${premios[nro]} 🤑`;
    }

}
else if (eleccionJuego==="3"){
    //Ruleta:
    const finalRuleta = 25;

    pregunta = confirm(`🤩 Querés jugar a la Ruleta? 🤩`);

    if (pregunta) {
        tirarRuleta();
        let volverAJugar = confirm("¿Querés volver jugar a la Ruleta? 🎡");
        while (volverAJugar){
            tirarRuleta();
            volverAJugar = confirm("¿Querés volver jugar a la Ruleta? 🎡");
        }
        pregunta = false;
    }

    function tirarRuleta() {
        let eleccionRuleta = parseInt(prompt(`Elegí un número entre 1 y ${finalRuleta}`));
        alert(`Elegiste el número: ${eleccionRuleta} ¡Veamos si tenés suerte! 🤞`);
        let nroGanador = aciertosRandom(finalRuleta+1,1);
        for (let index = 1; index <= finalRuleta; index++){
            if (index===nroGanador)
                console.log(`Número ganador: ${nroGanador} ✨`);
            else{
                console.log(`${index}`);
            }
        }
        if (eleccionRuleta===nroGanador)
            alert(`¡Felicidades, salió tu número! 🎉🎉🎉`);
        else
            alert(`Ohhh, no tuviste suerte... ¡Quizás la próxima vez! 😉`);
    }
}
if (!pregunta)
    alert("Lamentamos que te vayas... ¡Ojalá vuelvas pronto! 😊");


