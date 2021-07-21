function mostrar()
{
	//tomo el mes
	let mes;
	mes =document.getElementById("txtIdMes").value;
	switch (mes) {
		case "Julio":
		case "Agosto":
			alert("abrigate que hace frio");
			break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;
		default:
			alert("Ya pasamos el frio, ahora calor!!!!");
			break;
	}




}//FIN DE LA FUNCIÓN