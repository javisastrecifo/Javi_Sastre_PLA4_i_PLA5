/**
 * 
 */

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
