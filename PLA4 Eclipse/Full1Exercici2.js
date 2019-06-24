/**
 * 
 */

function exercici12(inputUsuari) {
	var inputCadena = "ABACDAEFAGHAABAH"
	var inputLletra = inputUsuari;
	var numeroCoincidencies = 0;
	for (posicioLletra = 0; posicioLletra <= inputCadena.length; posicioLletra++) {
		if (inputCadena.charAt(posicioLletra) == inputLletra) {
			numeroCoincidencies++;
		}
	}
	return numeroCoincidencies;
}
