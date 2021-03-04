function mostrar()
{
  /*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
  nombre
  Tipo cursada("libre";"presencial";"remota")
  cantidad de materias( mas de cero y menos de 8)
  Sexo ( femenino , masculino , no binario)
  Nota promedio (entre 0 y 10)
  edad (validar)


  se debe informar de existir, o informar que no existe , en el caso que corresponda.
  a) El nombre del mejor promedio que no sea masculino
  b) El nombre del mas joven de los alumnos entre los que la dan libre
  c) El promedio de nota por sexo
  d) La edad y nombre del que cursa mas materias que no sean en forma remota*/

  let nombre;
  let cursada;
  let cantMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let acumNotaM = 0;
  let acumNotaF = 0;
  let acumNotaNB = 0;
  let contMas = 0;
  let contFem = 0;
  let contNB = 0;
  let promedioMas = 0;
  let promedioFem = 0;
  let promedioNB = 0;
  let mejorProm = 0;
  let edadJovenLibre = 0 ;
  let nombreJovenLibre;
  let nombreMejorPromedio;
  let masMaterias = 0;
  let edadMasMaterias;
  let nombreMasMaterias;
  let seguir;

  let flagProm = 0;
  let flagJovenLibre = 0;
  let flagMaterias = 0; 
  do{
    nombre = prompt("Ingrese nombre:");

    cursada = prompt("Ingrese tipo de cursada libre, presencial o remota");
      while(cursada != "libre" && cursada != "presencial" && cursada != "remota"){
        cursada = prompt("Error!! Ingrese tipo de cursada libre, presencial o remota");
      }

    cantMaterias = parseInt(prompt("Ingrese cantidad de materias: "));
        while(cantMaterias<0 || cantMaterias>8 ||isNaN(cantMaterias)){
          cantMaterias = parseInt(prompt("Error!! Ingrese cantidad de materias: "));
        }

    sexo = prompt("Ingrese sexo femenino, masculino o no binario");
        while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario" ){
          sexo = prompt("Error!! Ingrese sexo femenino, masculino o no binario");
        }

    notaPromedio = parseFloat(prompt("Ingrese nota promedio: "));
    while(notaPromedio<0 || notaPromedio>10 ||isNaN(notaPromedio)){
      notaPromedio = parseInt(prompt("Error!! Ingrese nota promedio: "));
    }
      
    edad = parseInt(prompt("Ingrese edad:"));
        while(edad<0||isNaN(edad)){
          edad = parseInt(prompt("Error!! Ingrese edad:"));
        }

        /*a) El nombre del mejor promedio que no sea masculino*/ 
    if(sexo != "masculino" && (flagProm == 0 || mejorProm<notaPromedio)){
      mejorProm = notaPromedio;
      nombreMejorPromedio = nombre;
      flag = 1;
    }else if (mejorProm == 0){
      nombreMejorPromedio = "No se registraron notas que no sean masculinas.";
    }
    

      /* b) El nombre del mas joven de los alumnos entre los que la dan libre */
    if(cursada == "libre" && (flagJovenLibre == 0 || edadJovenLibre>edad)){
      nombreJovenLibre = nombre;
      edadJovenLibre = edad;
      flagJovenLibre = 1;
    }else if ( edadJovenLibre == 0){
      nombreJovenLibre = "No se ingresaron alumnos con cursada libre";
    }
      /*c) El promedio de nota por sexo*/
    switch(sexo){

      case "femenino":
        acumNotaF = acumNotaF + notaPromedio;
        contFem = contFem + 1;
        break;

      case "masculino":
        acumNotaM = acumNotaM + notaPromedio;
        contMas = contMas + 1;
        break;

      case "no binario":
        acumNotaNB = acumNotaNB +notaPromedio;
        contNB = contNB + 1;
        break;
      
    }
      /*d) La edad y nombre del que cursa mas materias que no sean en forma remota*/
    if(cursada != "remota" && (flagMaterias == 0 || masMaterias<cantMaterias)){
      masMaterias = cantMaterias;
      edadMasMaterias = edad;
      nombreMasMaterias = nombre;
      flagMaterias = 1; }

    seguir = prompt("Desea ingresar otro alumno? s/n:")
  }while(seguir == 's');

  if(contFem!=0){
   promedioFem = acumNotaF/contFem;
   console.log(promedioFem)
  }else{
    promedioFem = "No se registraron ingresos de notas femeninas."
  }

  if(contMas!=0){
    promedioMas = acumNotaM/contMas;
  }else{
    promedioMas = "No se registraron ingresos de notas masculinas."
  }

  if(contNB!=0){
    promedioNB = acumNotaNB/contNB;
  }else{
    promedioNB = "No se registraron ingresos de notas con sexo no binario."
  }


  console.log("A- El nombre del mejor promedio no masculino es: " + nombreMejorPromedio + " con una nota de: "+ mejorProm + 
  "\nB- El alumno mas joven en dar libre es: " + nombreJovenLibre + " con " + edadJovenLibre + " años."+
  "\nC- El promedio de nota femenino es: "+promedioFem+ ", el masculino: "+promedioMas+ " y el no binario: " + promedioNB+
  "\nD- La edad del alumno que cursa mas materias de forma remota es de: "+edadMasMaterias+ " y su nombre es: "+nombreMasMaterias);

}

























