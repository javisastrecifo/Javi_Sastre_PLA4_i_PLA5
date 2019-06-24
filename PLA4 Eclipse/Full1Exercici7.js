/**
 * 
 */

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
