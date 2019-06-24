/**
 * 
 */

function exercici13(inputUsuari1, inputUsuari2) {
	var inputCadena = inputUsuari1
	var inputLletra = inputUsuari2;
	var numeroCoincidencies = 0;
	for (posicioLletra = 0; posicioLletra <= inputCadena.length; posicioLletra++) {
		if (inputCadena.charAt(posicioLletra) == inputLletra) {
			numeroCoincidencies++;
		}
	}
	return numeroCoincidencies
}
