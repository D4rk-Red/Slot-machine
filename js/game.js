
// ...
var credito = Math.floor(Math.random()* 4) + 9;
var imagenes = ["moneda.png", "diamante.png", "cerezas.png", "tesoro.png", "otro.png", "dolar.png"];
var premios = [3, 2, 1, 4, 5, 2]; // valor de los premios 3=moneda, 2=diamante, etc...
var numero_actuales = [];
var activos = false // muestra si los botones estan activos

window.onload = inicio(); // Una vez cargada toda la ventana inicia


function inicio() {
	// Espera a el "boton" tirar y lanza el inicio
	document.getElementById("tirar").onclick = lanzar_inicio;
	document.getElementById("cruz").onclick = cerrar;

	for (let i =0;i< document.getElementsByClassName("boton").length; i++) {	
		document.getElementsByClassName("boton")[i].onclick= lanzar_uno;
	}

	actualizar();
}



// Presione el boton tirar.
function lanzar_inicio() {
	// pagar por tirar (1 moneda)
	if (credito > 0) {
	activos = true
	// Se crea una lista para los numeros random a elegir de la lista de imagenes, luego se escoge un numero y se muestra la imagen
	numero_actuales = [];
	for (var i = 0; i < document.getElementsByClassName('boton').length; i++) {
		numero_actuales.push(escoger_numero(""));
		mostrar_imagen(i,numero_actuales[i]);
	}
	comparar();
}
}



// Presione en uno de los tres botones.
function lanzar_uno() {
    // si tiene crédito
    if (credito > 0 && activos == true) {
        // Cambiar la imagen de todas las casillas
        for (let i = 0; i < numero_actuales.length; i++) {
            numero_actuales[i] = escoger_numero(numero_actuales[i]);
            mostrar_imagen(i, numero_actuales[i]);
        }
        comparar();
    }
}




// Escoger un numero.
function escoger_numero(actual) {
	do {
	var azar = Math.floor(Math.random() * imagenes.length);
	} while (azar == actual)
	return azar;	
}



// Muestra las imagenes moverse
function mostrar_imagen(num, im) {
	// 
	document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src= "img/" + imagenes[im];
}



// Comprueba si as imagenes son las mismas.
function comparar() {
	if(numero_actuales[0]== numero_actuales[1] && numero_actuales[1]== numero_actuales[2]){
		// Las tres casillas son las misma y hay premio
		activos = false;
		let p= premios[numero_actuales[0]];
		let mensaje = `Has ganado ${p} monedas <div>`;
		for (let i=0; i<p; i++){
			mensaje+= `<img src= "img/moneda.png">`;
		}
		mensaje += `</div>`;
		mostrar_mensaje(mensaje);
		credito += premios[numero_actuales[0]];
	}
	credito --;
	actualizar();
}



// Actualizar los datos de monedas, etc..
function actualizar() {
	document.getElementById("dinero").innerHTML=credito;
	document.getElementById("monedas").innerHTML = ""; 
	for (let i= 1; i<=credito;i++){
		document.getElementById("monedas").innerHTML += `<img src="img/moneda.png">`;
	}

	// mostrar si no tiene monedas
	if (credito < 1) {
		mostrar_mensaje("<b>GAME OVER</b><div class='subtitulo'>No te queda más dinero </div>");
	}
}



// Mensaje de cuando a ganado.
function mostrar_mensaje(m) {
	document.getElementById("velo").style.display = "flex";
	document.getElementById("mensaje").innerHTML =m;
}	



// Cerrar mensaje
function cerrar() {
	document.getElementById("velo").style.display= "none";
}



