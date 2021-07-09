/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let importeFinal;
	let Descuento;



	importe=parseFloat(document.getElementById("txtIdImporte").value);
	
	Descuento=importe*25/100;


	importeFinal=importe-Descuento;
	
	document.getElementById("txtIdResultado").value = importeFinal;
	


}
