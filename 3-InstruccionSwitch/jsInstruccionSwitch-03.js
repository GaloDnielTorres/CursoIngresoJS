function mostrar()
{
	//tomo el mes
	let mes;
	mes =document.getElementById("txtIdMes").value;
	switch (mes) {
		case "Febrero":
			alert("este mes no tiene mas de 29 dias");
			
			break;
	
		default:
			alert("este mes tiene 30 o mas dias");
			break;
	}
	
	


}//FIN DE LA FUNCIÓN