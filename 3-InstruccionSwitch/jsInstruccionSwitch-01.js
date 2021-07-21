function mostrar()
{
	
	let mes;


	mes =document.getElementById("txtIdMes").value;

	
	switch (mesDelAño) {
		case "Enero":
			alert("que comiences bien el año");
			
			break;
			case"Marzo":
			alert("a clases!!!");
			break;
			case "Julio":
				alert("se vienen las vacaciones!!!");
				break;
				case "Diciembre":
					alert("Felices Fiestas");
				break;
		default:
			alert("un mes comun y corriente");
			break;
	}



}//FIN DE LA FUNCIÓN