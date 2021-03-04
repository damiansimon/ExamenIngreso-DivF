/*a debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.


Se debe informar (solo si corresponde):
//a) La cantidad de personas con estado "viudo" de mas de 60 años.//
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/

function mostrar() {

  let nombre;
  let estadoCivil;
  let edad;
  let temperatura;
  let sexo;
  let precioBase = 600;
  let precioBruto;
  let contPasajeros = 0;
  let contAbueloViudo = 0;
  let contPasajerosAbu = 0;
  let nombreSolteraJoven;
  let edadSolteraJoven = 0;
  let porcentajeMayores;
  let precioTotal;
  let flag = 0;
  let seguir;

  do{
    nombre = prompt("Ingrese nombre:").toLowerCase();
      while(!(isNaN(nombre))){
        nombre = prompt("Error!! Ingrese nombre:").toLowerCase();
      }

    estadoCivil = prompt("Ingrese estado civil soltero,casado o viudo:").toLowerCase();
      while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
        estadoCivil = prompt("Error!! Ingrese estado civil soltero,casado o viudo:").toLowerCase();
      }    

    edad = parseInt(prompt("Ingrese edad (mayor a 17)"));
      while(edad<18 || isNaN(edad)){
        edad = parseInt(prompt("Error!! Ingrese edad (mayor a 17)"));
      }
    
    temperatura = parseFloat(prompt("Ingrese temperatura:"));
      while(isNaN(temperatura)){
        temperatura = parseFloat(prompt("Error!! Ingrese temperatura:"));
      }  

    sexo = prompt("Ingrese sexo m/f:").toLowerCase();
      while (sexo != 'm' && sexo!= 'f'){
        sexo = prompt("Error!! Ingrese sexo m/f:").toLowerCase();
      }
//a) La cantidad de personas con estado "viudo" de mas de 60 años.//
      if(edad>60 && estadoCivil == "viudo"){
        contAbueloViudo = contAbueloViudo + 1;
      }
//b) el nombre y edad de la mujer soltera mas joven.//
      if(estadoCivil == "soltero" && sexo == 'f'  && edadSolteraJoven<edad){
        edadSolteraJoven = edad;
        nombreSolteraJoven = nombre;
        flag = 1;
      }
//c) cuanto sale el viaje total sin descuento.//
      contPasajeros = contPasajeros + 1;
    seguir = prompt("Desea ingresar otro pasajero? s/n:");

  //  d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*///
      if(edad>60){
      contPasajerosAbu = contPasajerosAbu + 1;
      }
  }while(seguir == 's')

  precioBruto = precioBase*contPasajeros;

  porcentajeMayores = contPasajerosAbu*100/contPasajeros;
console.log("A- Hay "+ contAbueloViudo + " mayores de 60 que son viudos.");
console.log("B- La mujer mas joven se llama "+ nombreSolteraJoven+" y tiene "+edadSolteraJoven+" años.");
console.log("C- El viaje total sin descuento sale: $ "+ precioBruto);

if(porcentajeMayores>50){
  precioTotal = precioBruto - precioBruto * 0.25;
  console.log("D-El precio final con el descuento es de: $  "+precioTotal);
}


}

