/**
 * 
 */

function exercici11() {
	var inputCadena = "ABACDAEFAGHAABAH";
	var numeroCoincidencies = 0;
	for (posicioLletra = 0; posicioLletra <= inputCadena.length; posicioLletra++) {
		if (inputCadena.charAt(posicioLletra) == "A") {
			numeroCoincidencies++;
		}
	}
	return numeroCoincidencies;
}

