// Promedio y calificación de notas:

// Realice un programa en JavaScript que permita ingresar repetidamente el código (DNI) del estudiante (tipo entero) y dos notas (Nota1 y Nota2) de los exámenes (tipo real).
// La finalización del ingreso de datos ocurre cuando se ingresa un código igual a 999 (validar que las notas sean valores mayores o iguales a cero). 
// Calcule el promedio de las notas mediante una función llamada promedioNotas. 
// Asigne la calificación de acuerdo a las notas usando una función denominada calificacionNotas 
// que reciba la Nota promedio y devuelva una cadena de caracteres con la calificación correspondiente.

const prompt = require('prompt-sync')();
const chalk = require('chalk')

function promedioNotas(nota1, nota2) {
    return (nota1 + nota2) / 2
}


function calificacionNotas(promedio) {
    if (promedio >= 9) return "Excelente"
    else if (promedio >= 7) return "Bueno"
    else if (promedio >= 5) return "Regular"
    else return "Insuficiente"
}


while (true) {
    let dni = parseInt(prompt(chalk.blueBright("Ingrese el código (DNI) del estudiante o 999 para salir: ")))

    if (dni === 999) {
        console.log(chalk.redBright("Finalizando ingreso de datos..."))
        break;
    }

    let nota1 = parseFloat(prompt(chalk.magenta("Ingrese la primera nota: ")))
    let nota2 = parseFloat(prompt(chalk.magenta("Ingrese la segunda nota: ")))

    if (nota1 < 0 || nota2 < 0) {
        console.log(chalk.red("Las notas deben ser mayores o iguales a cero."))
    } else {
        let promedio = promedioNotas(nota1, nota2);
        let calificacion = calificacionNotas(promedio);
        
        console.log(chalk.greenBright(`DNI: ${dni}, Promedio: ${promedio.toFixed(2)}, Calificación: ${calificacion}`))
    }
}