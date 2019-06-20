/**
 * 
 */

function exercici1() {
	var inputCadena = "ABACDAEFAGHAABAH";
	var numeroCoincidencies = 0;
	for (posicioLletra = 1; posicioLletra <= inputCadena.length; posicioLletra++) {
		if (inputCadena.charAt(posicioLletra) == "A") {
			numeroCoincidencies++;
		}
	}
	return numeroCoincidencies
}

function exercici2(inputUsuari){
	var inputCadena = "ABACDAEFAGHAABAH"
		var numeroCoincidencies = 0;
		inputLletra = inputUsuari;
		for (posicioLletra = 1; posicioLletra <= inputCadena.length; posicioLletra++) {
			if (inputCadena.charAt(posicioLletra) == inputLletra) {
				numeroCoincidencies++
			}
		}
		return numeroCoincidencies
	}

function exercici3(inputUsuari1, inputUsuari2){
	var inputCadena = inputUsuari1
		var numeroCoincidencies = 0;
		inputLletra = inputUsuari2;
		for (posicioLletra = 1; posicioLletra <= inputCadena.length; posicioLletra++) {
			if (inputCadena.charAt(posicioLletra) == inputLletra) {
				numeroCoincidencies++
			}
		}
		return numeroCoincidencies
	}