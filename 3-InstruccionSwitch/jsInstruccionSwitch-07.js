function mostrar()
{
	let destino;
	destino=document.getElementById("txtIdDestino").value;

	switch (destino) {
		case ("Bariloche"):
			alert("tu destino esta al oeste");
			
			break;
		case("Ushuaia"):
			alert("tu destino esta al sur");
			break;
		case("Mar del plata"):
			alert("tu destino esta al este");
			break;
	
		default:
			alert("tu destino esta al norte");
			break;
	}

}//FIN DE LA FUNCIÓN