function mostrar() {

  /*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:

el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.


Se debe Informar al usuario lo siguiente:*/






  let producto;
  let precio;
  let cantidad;
  let tipo;
  let marca;
  let acumAlcohol = 0;
  let acumIac = 0;
  let acumQuat = 0;
  let contAlcohol = 0;
  let contIac = 0;
  let contQuat = 0;
  let acumComb = 0;
  let acumExplo = 0;
  let acumIgnifugo = 0;
  let acumIacPrecioBajo = 0;
  let precioCaro = 0;
  let marcaCara;
  let mayorTipo;
  let mayorInflamable;
  let tipoCaro;
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

    tipo = prompt("Ingrese tipo ignifugo, combustible o explosivo:");
      while(tipo != "ignifugo" && tipo != "combustible" && tipo != "explosivo" ){
        tipo = prompt("Error!! Ingrese tipo ignifugo, combustible o explosivo:");
      }

    marca = prompt("Ingrese marca:");

    switch(producto){
      case "alcohol":
        acumAlcohol = acumAlcohol + cantidad;
        contAlcohol = contAlcohol + 1;
        break;
      
      /*c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total*/
      case "iac":
        acumIac = acumIac + cantidad;
        contIac = contIac + 1;
        if(precio <=200){
          acumIacPrecioBajo = acumIacPrecioBajo + cantidad;
        }
        break;

      case "quat":
        acumQuat = acumQuat + cantidad;
        contQuat = contQuat + 1;
        break
    }

    switch(tipo){
      case "combustible":
        acumComb = acumComb + cantidad;
        break;

      case "explosivo":
        acumExplo = acumExplo + cantidad;
        break;

      case "ignifugo":
        acumIgnifugo = acumIgnifugo + cantidad;
        break;
    }

     /*d) la marca y tipo del más caro de los productos*/ 
    if(flag == 0 || precioCaro<precio){
      tipoCaro = producto;
      precioCaro = precio;
      marcaCara = marca;
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

  /*b) El tipo de inflamable con más cantidad de unidades en total de la compra */

  if(acumComb>acumExplo && acumComb>acumIgnifugo){
    mayorTipo = "combustible";
    mayorInflamable = acumComb;
  }else if(acumExplo>=acumComb && acumExplo>acumIgnifugo){
    mayorTipo = "explosivo";
    mayorInflamable = acumExplo;
  }else{
    mayorTipo ="ignifugo";
    mayorInflamable = acumIgnifugo;
  }

 alert("A- El promedio de alcohol es : " + promAlcohol+
        "\n Elpromedio de IAC es : " + promIac+
        "\n El promedio de Quat es : " + promQuat +
        "\n B- El inflamable con mas cantidad es " + mayorTipo + " con " + mayorInflamable +
        "\n C- Hay " + acumIacPrecioBajo +" unidades a $200 o menos "+ 
        "\n D- El tipo mas caro es: " + tipoCaro + " con un precio de: " + precioCaro + " y su marca es : " + marcaCara);





}