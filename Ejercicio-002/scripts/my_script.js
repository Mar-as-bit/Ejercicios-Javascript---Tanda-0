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
let number1= prompt(`Introduzca el primer número:`);
let number2= prompt(`Introduzca el segundo número:`);

if (isNaN(number1) || isNaN(number2)) {
    alert(`Por favor, introduzca un número válido.`);

} else {
    console.log (`La suma de ${number1} y ${number2} es: ${number1 + number2}`);
    console.log (`La resta de ${number1} y ${number2} es: ${number1 - number2}`);
    console.log (`El producto de ${number1} y ${number2} es: ${number1 * number2}`);
    console.log (`La división de ${number1} entre ${number2} es: ${(number1 / number2).toFixed(2)}`);
}
