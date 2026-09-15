/*Sale alerta pidiendo nombre*/ 
alert(`Introduzca su nombre:`);
/*El prompt sirve para que aparezca el POPUP*/ 
let nombre = prompt("Introduzca su nombre:");        

alert("Introduzca su edad:");
/*Se pone parseINT para que lo que ponga el usuario por escrito se convierta a número*/ 
let edad= parseInt(prompt("Introduzca su edad:"));

/*TEMPLATE STRING*/
/*Para juntar los datos que recibimos se juntan con el ${nombredevariable} y ahora se abre y cierra con `´*/
console.log(`Tu nombre es ${nombre} y tienes ${edad} años y eres ${edad >= 18 ? `mayor` : `menor`} de edad`);
/*Console.log para mostrar en consola y PROMPT para el POPUP*/
prompt(`Tu nombre es ${nombre} y tienes ${edad} años y eres ${edad >= 18 ? `mayor` : `menor`} de edad`);

/*El ´?' hace la condición, luego los dos puntos (este o este) según la condición*/
