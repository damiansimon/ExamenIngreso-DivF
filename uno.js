/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
/*a) El promedio de cantidad por tipo de producto*/
/*b) La categoria con mas cantidad de unidades en total de la compra*/
/*c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total*/
/*d) el fabricante y Categoria del más caro de los productos*/
function mostrar()
{
  let producto;
  let precio;
  let cantidad;
  let categoria;
  let fabricante;
  let acumAlcohol = 0;
  let acumIac = 0;
  let acumQuat = 0;
  let contAlcohol = 0;
  let contIac = 0;
  let contQuat = 0;
  let acumBactericida = 0;
  let acumDesinfectante = 0;
  let acumDetergente = 0;
  let acumDetergentePrecioBajo = 0;
  let contDetergente = 0;
  let precioCaro = 0;
  let fabricanteCara;
  let mayorCategoria;
  let nombreMayorCategoria;
  let categoriaCara;
  let promAlcohol = 0;
  let promIac = 0;
  let promQuat = 0;
  let flag = 0;



  for(let i=0; i<5 ; i++){

    producto = prompt("Ingrese producto ALCOHOL, IAC o QUAT:").toLowerCase();
      while (producto != "alcohol" && producto != "iac" && producto != "quat"){
        producto = prompt("Error!! Ingrese producto ALCOHOL, IAC o QUAT:").toLowerCase();
      }

    precio = parseFloat(prompt("Ingrese precio (100-300):"));
      while(precio<100 || precio >300 ||isNaN(precio) ){
        precio = parseFloat(prompt("Error!! Ingrese precio (100-300):"));
      }

    cantidad = parseInt(prompt("Ingrese cantidad (1-100):"));
      while(cantidad<1 || cantidad>1000 || isNaN(cantidad)){
        cantidad = parseInt(prompt("Error!! Ingrese cantidad (1-100):"));
      }

    categoria = prompt("Ingrese categoria desinfectante, bactericida o detergente:");
      while(categoria != "bactericida" && categoria != "desinfectante" && categoria != "detergente" ){
        categoria = prompt("Error!! Ingrese tipo bactericida, desinfectante o detergente:");
      }

    fabricante = prompt("Ingrese fabricante:");

    switch(producto){
      case "alcohol":
        acumAlcohol = acumAlcohol + cantidad;
        contAlcohol = contAlcohol + 1;
        break;
      
      
      case "iac":
        acumIac = acumIac + cantidad;
        contIac = contIac + 1;
        break;

      case "quat":
        acumQuat = acumQuat + cantidad;
        contQuat = contQuat + 1;
        break
    }

    switch(categoria){
      case "bactericida":
        acumBactericida = acumBactericida + cantidad;
        break;

      case "desinfectante":
        acumDesinfectante = acumDesinfectante + cantidad;
        break;
 /*c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total*/
		case "detergente":
			acumDetergente = acumDetergente + cantidad;
			contDetergente = contDetergente + 1;
			if(precio <=200){
			  acumDetergentePrecioBajo = acumDetergentePrecioBajo + cantidad;
			}
		break;
	
    }

     /*d) el fabricante y Categoria del más caro de los productos*/ 
    if(flag == 0 || precioCaro<precio){
      categoriaCara = categoria;
      precioCaro = precio;
      fabricanteCara = fabricante;
      flag = 1;
    }
  }


  /*a) El promedio de cantidad por tipo de producto*/ 
  if(contAlcohol!=0){
    promAlcohol = acumAlcohol/contAlcohol;
  }else{
    promAlcohol = "No se registraron pedidos de alcohol."
  }

  if(contIac!=0){
    promIac = acumIac/contIac;
  }else{
    promIac = "No se registraron pedidos de IAC.";
  }

  if(contQuat!=0){
    promQuat = acumQuat/contQuat;
  }else{
    promQuat = "No se registraron pedidos de QUAT."
  }

  /*b) La categoria con mas cantidad de unidades en total de la compra*/

  if(acumBactericida>acumDesinfectante && acumBactericida>acumDesinfectante){
    nombreMayorCategoria = "bactericida";
    mayorCategoria = acumBactericida;
  }else if(acumDesinfectante>=acumBactericida && acumDesinfectante>acumDetergente){
    nombreMayorCategoria = "desinfectante";
    mayorCategoria = acumDesinfectante;
  }else{
    nombreMayorCategoria ="detergente";
    mayorCategoria = acumDetergente;
  }

 console.log("A- El promedio de alcohol es : " + promAlcohol+
        "Elpromedio de IAC es : " + promIac+
        "El promedio de Quat es : " + promQuat)
        console.log("B- La categoria con mas cantidad es " + nombreMayorCategoria + " con " + mayorCategoria)
        console.log("C- Hay " + acumDetergentePrecioBajo +" unidades de detergente a $200 o menos ")
        console.log("D- La categoria mas caro es: " + categoriaCara + " con un precio de: " + precioCaro + " y su fabricante es : " + fabricanteCara);



}
