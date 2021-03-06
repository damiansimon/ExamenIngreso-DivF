/*debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer con Pami mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/



function mostrar()
{
  let nombre;
  let obraSocial;
  let edad;
  let temperatura;
  let sexo;
  let precioBase = 600;
  let precioBruto;
  let contPasajeros = 0;
  let contAbueloOsde = 0;
  let contPasajerosAbu = 0;
  let nombreJovenPami;
  let edadJovenPami = 0;
  let tempJovenPami = 0;
  let porcentajeMayores;
  let precioTotal;
  let flag = 0;
  let seguir;

  do{
    nombre = prompt("Ingrese nombre:").toLowerCase();
      while(!(isNaN(nombre))){
        nombre = prompt("Error!! Ingrese nombre:").toLowerCase();
      }

    obraSocial = prompt("Ingrese obra social PAMI,OSDE u otras:").toLowerCase();
      while(obraSocial != "pami" && obraSocial != "osde" && obraSocial != "otras"){
        obraSocial = prompt("Error!! Ingrese obra social PAMI,OSDE u otras:").toLowerCase();
      }    

    edad = parseInt(prompt("Ingrese edad (mayor a 17)"));
      while(edad<18 || isNaN(edad)){
        edad = parseInt(prompt("Error!! Ingrese edad (mayor a 17)"));
      }
    
    temperatura = parseFloat(prompt("Ingrese temperatura:"));
      while(isNaN(temperatura) ||temperatura<0){
        temperatura = parseFloat(prompt("Error!! Ingrese temperatura:"));
      }  

    sexo = prompt("Ingrese sexo m/f:").toLowerCase();
      while (sexo != 'm' && sexo!= 'f'){
        sexo = prompt("Error!! Ingrese sexo m/f:").toLowerCase();
      }
	//a) La cantidad de personas con OSDE de mas de 60 años.//
      if(edad>60 && obraSocial == "osde"){
        contAbueloOsde = contAbueloOsde + 1;
      }

	//b) el nombre y temperatura de la mujer con Pami mas joven.//
      if(obraSocial == "pami" && sexo == 'f' && edadJovenPami<edad){
        tempJovenPami = temperatura;
        nombreJovenPami = nombre;
        
      }
    //c) cuanto sale el viaje total sin descuento.//
      contPasajeros = contPasajeros + 1;
    seguir = prompt("Desea ingresar otro pasajero? s/n:");

    //d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*///
      if(edad>60){
      contPasajerosAbu = contPasajerosAbu + 1;
      }
  }while(seguir == 's')

  precioBruto = precioBase*contPasajeros;

  porcentajeMayores = contPasajerosAbu*100/contPasajeros;
console.log("A- Hay "+ contAbueloOsde + " mayores de 60 con OSDE.");
console.log("B- La mujer mas joven con PAMI se llama "+ nombreJovenPami+" y tiene "+tempJovenPami+" ° de temperatura.");
console.log("C- El viaje total sin descuento sale: $ "+ precioBruto);

if(porcentajeMayores>50){
  precioTotal = precioBruto - precioBruto * 0.25;
  console.log("D-El precio final con el descuento es de: $  "+precioTotal);
}

}
