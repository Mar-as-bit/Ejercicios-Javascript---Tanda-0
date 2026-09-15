/***************************************************************************************************************
 *
 *   Objetivo: Aprender a validar datos de entrada y realizar operaciones aritméticas entre datos solicitados.
 *             Aprender a emplear algún método del objeto Math.
 *             Emplear template strings con expresiones.
 *             Emplear funciones expresadas (arrow functions).
 *             Conocer las conversiones de tipos implícitas.
 *             Entender los errores de tipos de datos.
 *
 *   Tarea: Solicitar al usuario que visita la página dos números enteros y mostrar en la consola el resultado de
 *          sumarlos, restarlos, multiplicarlos y dividirlos
 *
 *   Entrada : Dos números enteros: numero1, numero2
 *
 *   Salida  : La suma de numero1 y numero2 es: numero1+numero2
 *             La resta de numero1 y numero2 es: numero1-numero2
 *             El producto de numero1 y numero2 es: numero1*numero2
 *             La division de numero1 entre numero2 es: numero1/numero2
 *
 *   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
 *             ¿Cómo podemos limitar el número de decimales que se mostrarán?
 *             ¿Qué pasa si dividimos por 0?
 *             ¿Qué pasa si introducimos una cadena en vez de un número?
 *
 ***************************************************************************************************************/

/*Primero empieza aqui*/

    /*Depende del numero dado*/ 
    /*Se mira si */
    do {
       let numero = (`Dime un entero`)
        /*Si da resultado NAN (No válido)*/
        /*Mientras numero no es NAN devuelve el numero del FILTRADO */
    }while (isNaN(numero))



/*Salta a esta parte, vuelve arriba^^*/
let numero1=pedirEntero(`Introduzca el primer número:`);
/*Sigue con el siguiente número*/
let numero2=pedirEntero(`Introduzca el segundo número:`);

/*Una vez echo el filtrado ahora si se opera con los números */
console.log (`La suma de ${numero1} y ${numero2} es: ${numero1 + numero2}`);
console.log (`La resta de ${numero1} y ${numero2} es: ${numero1 - numero2}`);
console.log (`El producto de ${numero1} y ${numero2} es: ${numero1 * numero2}`);
console.log (`La división de ${numero1} entre ${numero2} es: ${(numero1 / numero2)}`);