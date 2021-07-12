/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let Fahrenheit;
    let FahrenheitCentigrados;

    Fahrenheit=parseFloat(document.getElementById("txtIdTemperatura").value);
    FahrenheitCentigrados=(Fahrenheit-32)/1.8;
    alert (Fahrenheit + "farenheit equivalen a " + FahrenheitCentigrados.toFixed(2) + " grados centigrados");





}

function CentigradosFahrenheit () 
{
	let centigrados;
    let CentigradosFahrenheit;

    centigrados=parseFloat(document.getElementById("txtIdTemperatura").value);
    CentigradosFahrenheit=(centigrados*1.8) + 32;
    alert (centigrados + "centigrados equivalen a " + CentigradosFahrenheit.toFixed(2) + " grados fahrenheit");
}
