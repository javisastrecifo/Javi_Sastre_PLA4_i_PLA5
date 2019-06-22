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
	var inputCadena = inputUsuari1;
	var inputLletra = inputUsuari2;
	var llistaPosicions = [ "primera", "segona", "tercera", "quarta",
			"cinquena", "sisena", "setena", "vuitena", "novena", "desena",
			"onzena", "dotzena", "tretzena", "catorzena", "quinzena",
			"setzena", "dissetena", "divuitena", "dinovena", "vintena" ];
	var llistaResposta = [];
	var construccioResposta = "";
	for (var posicioLletra = 0; posicioLletra <= inputCadena.length; posicioLletra++) {
		if (inputCadena.charAt(posicioLletra) == inputLletra) {
			llistaResposta.push(llistaPosicions[posicioLletra]);
		}
		if (llistaResposta.length == 0) {
			construccioResposta = "No s'ha trobat el caracter '" + inputLletra
					+ "' a la cadena!"
		} else if (llistaResposta.length == 1) {
			construccioResposta = "Trobem la lletra '" + inputLletra
					+ "' a la " + llistaResposta[0] + " posicio.";
		} else if (llistaResposta.length == 2) {
			construccioResposta = "Trobem la lletra '" + inputLletra
					+ "' a les posicions " + llistaResposta[0] + " i "
					+ llistaResposta[1] + ".";
		} else if (llistaResposta.length > 2) {
			construccioResposta = "Trobem la lletra '" + inputLletra
					+ "' a les posicions " + llistaResposta[0];
			for (var comptadorResposta = 1; comptadorResposta < llistaResposta.length - 1; comptadorResposta++) {
				construccioResposta += ", " + llistaResposta[comptadorResposta];
			}
			construccioResposta += " i "
					+ llistaResposta[llistaResposta.length - 1] + ".";
		}

	}
	return construccioResposta;
}

function exercici7(input1, input2) {
	var cadena = input1;
	var inNumero = input2;
	var resultat = 0;
	for (var posicio = 0; posicio <= cadena.length; posicio++) {
		if (cadena.charAt(posicio) == inNumero) {
			resultat++;
		}
	}
	if (inNumero == 0) {
		resultat = resultat - 1;
	} else {
		resultat
	}
	return resultat
}

function exercici8(input1) {
	var cadena = input1;
	var coincidencies = 0;
	var construccioResposta = "";
	var detall = "";

	for (var casella = 0; casella < cadena.length; casella++) {

		for (var comptador09 = 0; comptador09 < 10; comptador09++) {
			if (cadena.charAt(casella) == comptador09) {
				coincidencies++;
				detall += "<br>" + "Caracter " + comptador09 + " a la posicio "
						+ casella + ".";
			}
		}

	}
	construccioResposta = "Donada la cadena " + cadena + ", s'han trobat "
			+ coincidencies + " caracters numerics." + detall;
	return construccioResposta

}
