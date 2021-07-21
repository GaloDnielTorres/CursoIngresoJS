function mostrar()
{
	//tomo el mes
	let mes;
	mes =document.getElementById("txtIdMes").value;
	switch (mes) {
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("este mes tiene 30 dias");
			break;

	
		default:
			alert("este mes tiene 31 dias");
			break;
	}
	



}//FIN DE LA FUNCIÓN