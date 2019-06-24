/**
 * 
 */


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
