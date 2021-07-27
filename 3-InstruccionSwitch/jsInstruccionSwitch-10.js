function mostrar()
{
	let destino;
	let estacion;


	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			if (destino== "Bariloche") {
				alert ("se viaja");
				
			}
			else{
				alert("no se viaja");
			}			
			break;
			
		case "Verano":
				if (destino=="Mar del plata" || destino== "Cataratas") {
					
					alert ("se viaja");
				
			}
			else{
				alert("no se viaja");
			}	
			break;
		case "Primavera":
			if (destino=="Bariloche") {
				alert("no se viaja");
			}
			else{
				alert("se viaja");
			}
			break;
		default:
			alert("Se viaja");
	}
}//FIN DE LA FUNCIÓN