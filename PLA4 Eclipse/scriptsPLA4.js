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

function exercici17(input1, input2) {
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

function exercici18(input1) {
	var cadena = input1;
	var coincidencies = 0;
	var construccioResposta = "";
	var detall = "";

	for (var casella = 0; casella < cadena.length; casella++) {

		for (var comptador09 = 0; comptador09 < 10; comptador09++) {
			if (cadena.charAt(casella) == comptador09) {
				coincidencies++;
				detall += "<br>" + "Caracter " + comptador09 + " a la posicio "
						+ (casella + 1) + ".";
			}
		}

	}
	construccioResposta = "Donada la cadena " + cadena + ", s'han trobat "
			+ coincidencies + " caracters numerics." + detall;
	return construccioResposta

}

function exercici21(input1, input2) {
	var cadena = input1;
	var numero = input2;
	var resposta = "";
	var coincidencies = 0;
	var detall = "";

	for (var casella = 0; casella < cadena.length; casella++) {
		if (cadena.charAt(casella) > numero) {
			coincidencies++, detall += "<br>" + "Caracter "
					+ cadena.charAt(casella) + " a la posicio " + (casella + 1)
					+ ".";
		}
	}
	resposta = "<br>" + "Donada la cadena " + cadena + "..." + "<br>"
			+ "S'han trobat " + coincidencies + " numeros mes grans que "
			+ numero + ". " + detall;

	return resposta
}

function exercici22(input1) {
	var cadena = input1;
	var resposta = "Donada la cadena" + cadena + "..." + "<br>";
	var alfabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
			"m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
			"y", "z" ];
	var llibreria = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0 ];

	for (var casella = 0; casella < cadena.length; casella++) {
		for (var comptadorLletres = 0; comptadorLletres < alfabet.length; comptadorLletres++) {
			if (cadena.charAt(casella) == alfabet[comptadorLletres]) {
				llibreria[comptadorLletres]++;
			}
		}
	}
	for (i = 0; i < alfabet.length; i++) {
		resposta += "<br>" + llibreria[i] + " vegades " + alfabet[i] + ".";
	}

	return resposta;
}

function exercici23() {
	var llista1 = [ Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista2 = [ Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista3 = [ Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista4 = [ Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista5 = [ Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
			Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];

	var llistes = "<br>" + llista1.join() + "<br>" + llista2.join() + "<br>"
			+ llista3.join() + "<br>" + llista4.join() + "<br>"
			+ llista5.join();
	;
	var resposta = "<br>" + "La suma de la diagonal es "
			+ (llista1[0] + llista2[1] + llista3[2] + llista4[3] + llista5[4])
			+ ".";
	+".";
	return llistes + resposta;
}

function exercici25() {
	var llista1 = [];
	var llista2 = [];
	var llista3 = [];
	var llista4 = [];
	var llista5 = [];
	var llistes = "";
	var resposta = "";

	var pregunta = prompt(
			"Introdueix els 5 caracters de la primera filera (de l'1 al 9, sense comes )",
			"12345");
	for (var i = 0; i < 5; i++) {
		llista1.push(parseInt(pregunta.charAt(i)));
	}
	var pregunta = prompt(
			"Introdueix els 5 caracters de la segona filera (de l'1 al 9, sense comes )",
			"12345");
	for (var j = 0; j < 5; j++) {
		llista2.push(parseInt(pregunta.charAt(j)));
	}
	var pregunta = prompt(
			"Introdueix els 5 caracters de la tercera filera (de l'1 al 9, sense comes )",
			"12345");
	for (var k = 0; k < 5; k++) {
		llista3.push(parseInt(pregunta.charAt(k)));
	}
	var pregunta = prompt(
			"Introdueix els 5 caracters de la quarta filera (de l'1 al 9, sense comes )",
			"12345");
	for (var l = 0; l < 5; l++) {
		llista4.push(parseInt(pregunta.charAt(l)));
	}
	var pregunta = prompt(
			"Introdueix els 5 caracters de la cinquena filera (de l'1 al 9, sense comes )",
			"12345");
	for (var m = 0; m < 5; m++) {
		llista5.push(parseInt(pregunta.charAt(m)));
	}

	resposta = "<br>" + "La suma de la diagonal es "
			+ (llista1[0] + llista2[1] + llista3[2] + llista4[3] + llista5[4])
			+ ".";

	llistes = "<br>" + "<br>" + llista1.join() + "<br>" + llista2.join()
			+ "<br>" + llista3.join() + "<br>" + llista4.join() + "<br>"
			+ llista5.join();

	return llistes + resposta;
}

function exercici26() {
	var calculMatriu = 0;
	var resposta = "";
	var costat = prompt("Introdueix el numero de costat de la matriu (n x n)",
			"3");
	var cadena = prompt("Introdueix tots els números de la matriu de costat "
			+ costat, "");
	var casella = 0;

	calculMatriu = parseInt(cadena.charAt(casella));

	for (var i = 0; i < parseInt(costat) - 1; i++) {
		casella = casella + parseInt(costat) + 1;
		calculMatriu += parseInt(cadena.charAt(casella));
	}

	resposta = "La suma de la diagonal es " + calculMatriu + ".";

	return resposta;
}

function exercici27() {
	var resposta = "";
	var respostaElements = "";
	var respostaCompara = "";
	var numerosElements = [];
	var numerosCompara = [];
	var costat = prompt("Introdueix el numero de costat de la matriu (n x n)",
			"3");
	var cadena = prompt("Introdueix tots els números de la matriu de costat "
			+ costat, "");
	var compara = prompt("Introdueix el numero a comparar", "");
	var casella = 0;

	numerosElements.push(parseInt(cadena.charAt(casella)));

	for (var i = 0; i < parseInt(costat) - 1; i++) {
		casella = casella + parseInt(costat) + 1;
		numerosElements.push(parseInt(cadena.charAt(casella)));
	}

	for (var j = 0; j < numerosElements.length; j++) {
		if (numerosElements[j] > parseInt(compara)) {
			numerosCompara.push(numerosElements[j]);
		}
	}

	respostaElements = "Els numeros de la diagonal a comparar son "
			+ numerosElements.join() + ".";
	respostaCompara = "Els numeros de la diagonal mes grans que " + compara
			+ " son " + numerosCompara.join() + ".";

	resposta = respostaElements + "<br>" + respostaCompara;

	return resposta;
}

function exercici28() {
	var primeraColumna = [];
	var resposta = "";
	var respostaSuma = "";
	var suma = 0;
	var costat = prompt("Introdueix el numero de costat de la matriu (n x n)",
			"3");
	var cadena = prompt("Introdueix tots els números de la matriu de costat "
			+ costat, "");

	for (var i = 0; i < parseInt(costat); i++) {
		primeraColumna.push(cadena.charAt(i));
		suma += parseInt(primeraColumna[i]);
	}

	resposta = "Els numeros de la primera columna son " + primeraColumna.join()
			+ ".";
	respostaSuma = "El resultat de la suma dels numeros de la primera columna es "
			+ suma + ".";

	return resposta + "<br>" + respostaSuma;
}
