function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	if (edad >17 || edad <13) {
		alert("usted no es adolescente");
	}
	

}//FIN DE LA FUNCIÓN