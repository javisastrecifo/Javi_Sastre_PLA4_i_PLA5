/**
 * 
 */

function exercici26() {

	var resposta = "";
	var costat = prompt("Introdueix el numero de costat de la matriu (n x n)",
			"3");
	var cadena = prompt("Introdueix tots els números de la matriu de costat "
			+ costat, "");
	var casella = 0;
	var calculMatriu = 0;

	for (var i = 0; i < parseInt(costat); i++) {
		
		calculMatriu += parseInt(cadena.charAt(casella));
		casella = casella + parseInt(costat) + 1;
	}

	resposta = "La suma de la diagonal es " + calculMatriu + ".";

	return resposta;
}