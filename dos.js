
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/ 

function mostrar()
{
  let nombre;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let seguir;
  let mejorPromedio;
  let nombreMejorPromedio;
  let edadMayorEstudiante;
  let nombreMayorEdad;
  let acumNotaBuscando = 0;
  let acumNotaSoloEstudiante = 0;
  let acumNotaTrabajando = 0;
  let contBuscando = 0;
  let contSoloEstudiante = 0;
  let contTrabajando = 0;
  let menosMaterias = 0;
  let edadMenosMaterias;
  let nombreMenosMaterias;
  let flagMayor = 0;
  let flagMaterias = 0;
  let promedioNotaSoloEstudiante;
  let promedioNotaBuscando;
  let promedioNotaTrabajando;
  let flag = 0;
  
  

  do{
    nombre = prompt("Ingrese nombre:");

    situacionLaboral = prompt("Ingrese situacion laboral buscando,trabajando o solo estudiante");
        while(situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante"){
        situacionLaboral = prompt("Error!! Ingrese situacion laboral buscando,trabajando o solo estudiante");
    }
        
    cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias (1-8):"));
      while(cantidadMaterias<1 ||cantidadMaterias>8){
        cantidadMaterias = parseInt(prompt("Error!! Ingrese cantidad de materias (1-8):"))
      }

    sexo = prompt("Ingrese sexo femenino, masculino o no binario");
        while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario" ){
          sexo = prompt("Error!! Ingrese sexo femenino, masculino o no binario");
        }

    notaPromedio = parseFloat(prompt("Ingrese nota promedio: "));
    while(notaPromedio<=0 || notaPromedio>10 ||isNaN(notaPromedio)){
      notaPromedio = parseInt(prompt("Error!! Ingrese nota promedio: "));
    }
      
    edad = parseInt(prompt("Ingrese edad:"));
        while(edad<0||isNaN(edad)){
          edad = parseInt(prompt("Error!! Ingrese edad:"));
        }

        /*a) El nombre del mejor promedio que no sean de los que tarbajan o estan buscando*/ 
    if(situacionLaboral == "buscando" && (flagProm == 0 || mejorPromedio<notaPromedio)){
      mejorPromedio = notaPromedio;
      nombreMejorPromedio = nombre;
      flag = 1;
    }else if (mejorProm == 0){
      nombreMejorPromedio = "No se registraron notas de las personas que estan buscando trabajo.";
    }

   // b) El nombre del mas viejo de los alumnos que solo sea estudiantes//
    if(situacionLaboral == "solo estudiante"){
      nombreMayorEdad = nombre;
      edadMayorEstudiante = edad;
      flagMayor = 1;
    }else if ( edadJovenLibre == 0){
      nombreMayorEdad = "No se ingresaron alumnos solo estudiantes";
    }

    //c) El promedio de nota por situacion laboral//
    switch(situacionLaboral){
      case "buscando":
        acumNotaBuscando = acumNotaBuscando + notaPromedio;
        contBuscando = contBuscando + 1;
        break;

      case "trabajando":
        acumNotaTrabajando = acumNotaTrabajando + notaPromedio;
        contTrabajando = contTrabajando + 1;
        break;

      case "solo estudiante":
        acumNotaSoloEstudiante = acumNotaSoloEstudiante + notaPromedio;
        contSoloEstudiante = contSoloEstudiante + 1;
        break;
    }

    /*d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/ 
    if(situacionLaboral == "buscando" && (flagMaterias == 0 || menosMaterias>cantMaterias)){
      menosMaterias = cantMaterias;
      edadMenosMaterias = edad;
      nombreMenosMaterias = nombre;
      flagMaterias = 1; }

    seguir = prompt("Desea ingresar otro alumno?:s/n") 
  }while(seguir == 's')


if(contTrabajando!=0){
  promedioNotaTrabajando = acumNotaTrabajando/contTrabajando;
}else{
  promedioNotaTrabajando = "No se registraron notas de personas que solo esten trabajando";
}

if(contBuscando!=0){
  promedioNotaBuscando = acumNotaBuscando/contBuscando;
}else{
  promedioNotaBuscando = "No se registraron notas de personas que esten buscando trabajo";
}

if(contSoloEstudiante!=0){
  promedioNotaSoloEstudiante = acumNotaSoloEstudiante/contSoloEstudiante;
}else{
  promedioNotaSoloEstudiante = "No se registraron notas de personas que esten solo estudien";
}



console.log("El nombre del mejor promedio que no sean de los que tarbajan o estan buscando es: " + nombreMejorPromedio + " y su promedio es: " + mejorPromedio);
console.log("El nombre del mas viejo de los alumnos que solo sea estudiantes es: "+nombreMayorEdad+" con "+edadMayorEstudiante);
console.log("El promedio de nota para los que solo estudian es: "+promedioNotaSoloEstudiante);
console.log("El promedio de nota para los que trabajan es: "+promedioNotaTrabajando);
console.log("El promedio de nota para los que estan buscando trabajo es: "+promedioNotaBuscando);
console.log("La edad de la persona que cursa menos cantidad de materias y esta buscando trabajo es:"+edadMenosMaterias + " y su nombre es: "+nombreMenosMaterias);

}