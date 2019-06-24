/**
 * 
 */

function exercici14(inputUsuari1, inputUsuari2) {
	var inputCadena = inputUsuari1;
	var inputLletra = inputUsuari2;
	var lletraLocalitzada = 0;
	for (posicioLletra = 0; posicioLletra <= inputCadena.length; posicioLletra++) {
		if (inputCadena.charAt(posicioLletra) == inputLletra
				&& lletraLocalitzada == 0) {
			lletraLocalitzada = posicioLletra + 1;
		}
	}
	return lletraLocalitzada;
}
