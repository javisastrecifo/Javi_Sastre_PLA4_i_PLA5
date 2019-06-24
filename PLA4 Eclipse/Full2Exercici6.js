/**
 * 
 */

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
