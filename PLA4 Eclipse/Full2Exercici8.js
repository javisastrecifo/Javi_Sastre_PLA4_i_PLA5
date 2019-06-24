/**
 * 
 */

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
