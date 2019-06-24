/**
 * 
 */


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
