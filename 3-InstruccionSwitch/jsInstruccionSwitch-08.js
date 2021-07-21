function mostrar()
{
	let destino;
	destino=document.getElementById("txtIdDestino").value;

	switch (destino) {
		case ("Bariloche"):
		case("Ushuaia"):
			alert("hace frio");
			
			break;
	
		default:
			alert("hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN