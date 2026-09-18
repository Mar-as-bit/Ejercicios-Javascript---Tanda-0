/***************************************************************************************************************
 *
 *   Objetivo: Aprender a usar estructuras de programación condicionales
 *             Entender el valor de la comprobación de datos de entrada enuyn lenguaje debilmente tipado
 *
 *   Tarea: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
 *          Realizar de dos formas: empleando if y empleando switch
 *
 *   Entrada : edad
 *
 *   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
 *             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
 *             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
 *
 *   Notas   : Debemos comprobar que la edad sea un número entero mayor que 0 (indicaremos el error)
 *             La edad no puede ser superior a 120
 *
 ***************************************************************************************************************/

// function pedirEntero(message,min=-Infinity,max=Infinity){
//     let edad
//     do{
//         edad = parseInt(prompt(message))
//         if (isNaN(edad)) {
//             alert("Tiene que ser un numero entero")
//         } else if (edad<=min||edad>max) {
//             alert(`Tiene que ser mayor que ${min} y menor que ${max}`)
//         }
//     }while(isNaN(edad)||edad<=min||edad>max)
// } let edad=pedirEntero(0,120)

let nota = prompt (`Introduce tu edad`);
let message="" 
switch(true){
    case(edad<30):
        message=` ! Ponte a trabajar !`
        break;
    case (edad<=65):
        message=`! Que ganas tengo de jubilarme !`
        break;
    case (edad>65):
        message=`! Descansa un poco !`
        break;
};
alert(message);