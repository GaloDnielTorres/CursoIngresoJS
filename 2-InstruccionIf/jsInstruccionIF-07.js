function mostrar()
{
	let edad;
    let estadoCivil;


    edad=parseInt(document.getElementById("txtIdEdad").value);
    estadoCivil=document.getElementById("estadoCivil").value;
    

    if (edad <18 && estadoCivil !=("Soltero")) {
        alert ("es muy pequeño para no ser soltero");
    }

}//FIN DE LA FUNCIÓN