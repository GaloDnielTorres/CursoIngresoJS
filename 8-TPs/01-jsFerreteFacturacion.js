/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
    let sumaTotal;
   



    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    sumaTotal= precioUno + precioDos + precioTres;
    
    alert ("la suma de los 3 productos es " + sumaTotal + "$");
}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
    let sumaTotal;
    let promedioTotal;
    




    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    sumaTotal= precioUno + precioDos + precioTres;
    promedioTotal= sumaTotal/3;
    alert("el promedio de los 3 productos es " + promedioTotal + "$");
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
    let sumaTotal;
    let iva;
    let precioFinal;




    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    sumaTotal= precioUno + precioDos + precioTres;
    iva= sumaTotal*21/100;
    precioFinal= sumaTotal + iva ;
    alert("el precio final con iva incluido es de " + precioFinal + "$");
}