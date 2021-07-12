function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	if (edad<13) {
		alert("ustes es un niño");
		
	} else {

		if (edad<=17 && edad>=13) {
			alert("sos adolescente");
			
		} else {
			alert("usted es adulto");
		}
		
	}
}//FIN DE LA FUNCIÓN