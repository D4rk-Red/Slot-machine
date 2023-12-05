// Variable para la imagen.
let caja = document.getElementById('contentSpan');
caja.addEventListener('mouseover', mover);



function mover() {
	caja.style.position = 'relative';
	coordenadas = obtenerNumero();
	// Declaramos las posiciones.
	caja.style.left = coordenadas[0] + '%';
	caja.style.top = coordenadas[1] + "vw";
}


function obtenerNumero (){
	var posicionX = Math.floor(Math.random() * 50);
	var posicionY = Math.floor(Math.random() * -20);

	var listaNumeros = [posicionX, posicionY];

	return listaNumeros
}
