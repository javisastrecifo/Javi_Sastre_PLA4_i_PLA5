/**
 * 
 */


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
