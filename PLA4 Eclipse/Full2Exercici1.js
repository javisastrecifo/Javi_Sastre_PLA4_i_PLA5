/**
 * 
 */

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

