/**
 * 
 */


function exercici16(inputUsuari1, inputUsuari2) {
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
