// //Variables Globales

// let pelicula;
// let eleccion;
// let acum = 0;
// //Precios de la funcion segun el dia 


// function datosPersonales() {
//     let usuario = prompt("¡Hola!, ingresa tu nombre: ");
//     alert("¡Bienvenido " + usuario + " ,Segui las siguientes intrucciones para poder comprar tu entrada correctamente");


// }
// function eleccionPelicula() {

//     let correcto;
//     do {
//         alert("Para elegir una pelicula debes introducir el numero de referencia a la pelicula elegida");
//         alert("¿Que Pelicula deseas ver ?");
//         pelicula = prompt("1-Intensamente 2 \n 2-Planeta de los Simios \n 3-Harry Potter el Prisionero de Azkaban");

//         switch (pelicula) {
//             case '1': alert("¡Bien haz elegido Intensamente 2!");
//                 break;
//             case '2': alert("¡Bien haz elegido Planeta de los Simios!");
//                 break;
//             case '3': alert("¡Bien haz elegido Harry Potter y el Prisionera de Azkaban!");
//                 break;
//             case '': alert("Debes ingresar algun numero");
//                 break;

//             default: alert("El numero introducido es invalido");
//                 break;
//         }
//         correcto = (pelicula == '1' || pelicula == '2' || pelicula == '3');
//     } while (correcto == false);

// }

// function diaHorario() {
//     let valido = false;
//     do {

//         alert("Los dias y horarios que tenemos para ver esa pelicula son los siguientes (elije el dia) ");

//         if (pelicula == '1') {
//             eleccion = prompt("'A' --> Sabado --> 22:45 hs \n 'B' --> Miercoles --> 14:30 hs");
//             valido = true;
//             if(eleccion!='A' && eleccion !='B'){
//                 valido=false;
//                 alert("Eleccion Invalida");
//             }
//         }
//         else if (pelicula == '2') {

//             eleccion = prompt("'A' --> Martes --> 19:45 hs \n 'B' --> Jueves --> 16:30 hs");
//             valido = true;

//             if(eleccion!='A' && eleccion !='B'){
//                 valido=false;
//                 alert("Eleccion Invalida");
//             }

//         }
//         else if (pelicula == '3') {
//             eleccion = prompt("'A' --> Viernes  22:00 hs \n 'B' --> Lunes 14:30 hs");
//             valido = true;

//             if(eleccion!='A' && eleccion !='B'){
//                 valido=false;
//                 alert("Eleccion Invalida");
//             }
//         }
       
//     } while (valido == false);

// }

// function precioEntrada() {
    
   
//     switch (pelicula) {
//         case '1': {
//             if (eleccion == 'A') {
//                 acum += precioSabado;
//             }
//             else if (eleccion == 'B') {
//                 acum += precioMiercoles;
//             }
//         }
//             break;
//         case '2': {
//             if (eleccion == 'A') {
//                 acum += precioMartes;
//             }
//             else if (eleccion == 'B') {
//                 acum += precioJueves;
//             }
//         }
//             break;
//         case '3': {
//             if (eleccion == 'A') {
//                 acum += precioViernes;
//             }
//             else if (eleccion == 'B') {
//                 acum += precioLunes;
//             }
//         }
//             break;
//     }

//     alert("El precio de la entrada seleccionada es : $" + acum);
// }



// datosPersonales();
// eleccionPelicula();
// diaHorario();
// precioEntrada();

// Variables globales (solo las necesarias)

let pelicula;
let eleccion;

//Precios de entrada por día
const precioLunes = 150;
const precioMartes = 150;
const precioMiercoles = 150;
const precioJueves = 200;
const precioViernes = 250;
const precioSabado = 300;

// Función para obtener datos personales del usuario
function datosPersonales() {
  let usuario = prompt("¡Hola!, ingresa tu nombre:");
  alert("¡Bienvenido " + usuario + ", sigue las siguientes instrucciones para comprar tu entrada!");
  return usuario;
}

// Función para elegir la película
function eleccionPelicula() {
  do {
    alert("Para elegir una película, introduce el número de referencia:");
    pelicula = prompt("1- Intensamente 2\n2- Planeta de los Simios\n3- Harry Potter y el Prisionero de Azkaban");
    switch (pelicula) {
      case '1':
      case '2':
      case '3':
        alert(`¡Bien, has elegido la película ${pelicula}!`);
        return; // Salir de la función si la elección es válida
      case '':
        alert("Debes ingresar un número.");
        break;
      default:
        alert("El número introducido es inválido.");
    }
  } while (true); // Repetir hasta que se haga una elección válida
}

// Función para elegir el día y horario
function diaHorario() {
  do {
    alert("Elige el día y horario para la película seleccionada:");
    switch (pelicula) {
      case '1':
        eleccion = prompt("'A' --> Sábado --> 22:45 hs\n'B' --> Miércoles --> 14:30 hs");
        break;
      case '2':
        eleccion = prompt("'A' --> Martes --> 19:45 hs\n'B' --> Jueves --> 16:30 hs");
        break;
      case '3':
        eleccion = prompt("'A' --> Viernes --> 22:00 hs\n'B' --> Lunes --> 14:30 hs");
        break;
    }
    if (eleccion === 'A' || eleccion === 'B') {
      return; // Salir de la función si la elección es válida
    } else {
      alert("Elección inválida.");
    }
  } while (true); // Repetir hasta que se haga una elección válida
}

// Función para calcular el precio de la entrada
function precioEntrada(pelicula, eleccion) {
  let precio = 0;

  // Calcula el precio base según la película
  switch (pelicula) {
    case '1':{
        switch(eleccion){
            case 'A': precio=300;
            break;
            case 'B': precio=200;
            break;
        }
    }
    break;
    case '2':{
        switch(eleccion){
            case 'A': precio=150;
            break;
            case 'B': precio=200;
            break;
        }
    }
    break;
    case '3':{
        switch(eleccion){
            case 'A': precio=300;
            break;
            case 'B': precio=150;
            break;
        }
    }
    break;
  }

 
  return precio;
}

function golosinas() {
    alert("¿Te interesa alguna de las siguientes golosinas?");
    let comida = parseInt(prompt("1-Chocolate Milka Negro \n 2- Caramelos Arcor (100 grs) \n 3-Pochoclos (Balde Grande)"));
    return comida;
  }
  

// Ejecución del programa

let user=datosPersonales();
eleccionPelicula();
diaHorario();
precioEntrada(pelicula, eleccion);
let valor=precioEntrada(pelicula,eleccion);
alert("El precio de la entrada es: $" + valor);
alert("¿Cuantas entradas queres ? " + user);
let cantidad = prompt("");
//Funcion flecha cantidad de entradas
valor=valor * cantidad;

alert("Total a pagar " + valor);







