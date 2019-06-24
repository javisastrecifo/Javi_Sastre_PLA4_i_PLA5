/**
 * 
 */

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
