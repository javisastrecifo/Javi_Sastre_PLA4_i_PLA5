/**
 * 
 */

function exercici1() {
	var inputCadena = "ABACDAEFAGHAABAH";
	var numeroCoincidencies = 0;
	for (posicioLletra = 0; posicioLletra <= inputCadena.length; posicioLletra++) {
		if (inputCadena.charAt(posicioLletra) == "A") {
			numeroCoincidencies++;
		}
	}
	return numeroCoincidencies;
}

function exercici2(inputUsuari) {
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

function exercici3(inputUsuari1, inputUsuari2) {
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

function exercici4(inputUsuari1, inputUsuari2) {
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

function exercici6(inputUsuari1, inputUsuari2) {
	var inputCadena = inputUsuari1
	var inputLletra = inputUsuari2
	var llistaPosicions = [ "primera", "segona", "tercera", "quarta",
			"cinquena", "sisena", "setena", "vuitena", "novena", "desena",
			"onzena", "dotzena", "tretzena", "catorzena", "quinzena",
			"setzena", "dissetena", "divuitena", "dinovena", "vintena" ];
	var llistaResposta = [];
	for (var posicioLletra = 0; posicioLletra <= inputCadena.length; posicioLletra++) {
		if (inputCadena.charAt(posicioLletra) == inputLletra) {
			llistaResposta.push(llistaPosicions[posicioLletra]);
		}
	}
	return llistaResposta.join();
}

function exercici7(input1, input2){
	var cadena = input1
	var numero = input1
		for (var posicioLletra = 0; posicioLletra <= inputCadena.length; posicioLletra++){
		
	}
return 	
}