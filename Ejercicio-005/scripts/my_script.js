/***************************************************************************************************************
 *
 *   Objetivo: Reflexionar sobre el tipo de estructura de programación a emplear que permita resolver la tarea
 *             de la forma más eficiente
 *             
 *
 *   Tarea: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
 *          según la siguiente tabla
 *
 *                Cualificación    Porcentaje
 *             -----------------  -------------
 *             Matrícula de honor     100
 *                Sobresaliente      90-99
 *                  Notable          70-89
 *                    Bien           60-69
 *                   Aprobado        50-59
 *                   Suspenso         0-49
 *
 *   Entrada : nota
 *
 *   Salida  : El examen se cualifica con un XXX
 *
 ***************************************************************************************************************/



let nota = prompt (`Introduce tu nota`);
switch(true){
    case(nota===100):
        alert(`Cualificación: MATRICULA DE HONOR`);
    break;

    case(nota>=90 && nota<= 99):
        alert(`Cualificación: SOBRESALIENTE`);
    break;

    case(nota>=70 && nota<= 89):
        alert(`Cualificación: NOTABLE`);
    break;

    case(nota>=60 && nota<= 69):
        alert(`Cualificación: BIEN`);
    break;

    case(nota>=50 && nota<=59):
        alert(`Cualificación: AP`);
    break;
}