// Cálculo del jornal diario:
// Los empleados de una fábrica trabajan en dos turnos, diurno y nocturno. 
// Escriba una función en JavaScript llamada jornal que tome como parámetros el número de horas, 
// el turno y el tipo de día ("Festivo" o "Laborable") y devuelva el sueldo a cobrar. 
// Además, escriba un algoritmo principal que pida el nombre del trabajador, el día de la semana, turno y número de horas trabajadas, 
// y muestre el sueldo a cobrar usando la función jornal. Tenga en cuenta que la función pide el tipo de día, 
// pero en el algoritmo se debe saber si el día introducido por el usuario es festivo o no.

const prompt = require('prompt-sync')();


function jornal(horas, turno, tipoDia) {
    let tarifaHora

    if (turno.toLowerCase() === "diurno") {
        tarifaHora = 100
    } else if (turno.toLowerCase() === "nocturno") {
        tarifaHora = 120
    } else {
        console.log("Error: Turno inválido.")
        return 0
    }

   
    if (tipoDia.toLowerCase() === "festivo") {
        tarifaHora *= 1.5
    }

    return horas * tarifaHora
}


function esFestivo(dia) {
    const festivos = ["sábado", "domingo"]
    return festivos.includes(dia.toLowerCase()) ? "Festivo" : "Laborable"
}


while (true) {
    let nombre = prompt("Ingrese el nombre del trabajador o escriba 'salir' para terminar: ")
    if (nombre.toLowerCase() === "salir") {
        console.log("Finalizando ingreso de datos...")
        break;
    }

    let diaSemana = prompt("Ingrese el día de la semana: ")
    let turno = prompt("Ingrese el turno (diurno/nocturno): ")
    let horas = parseFloat(prompt("Ingrese el número de horas trabajadas: "))

    if (horas < 0) {
        console.log("Error: El número de horas debe ser mayor o igual a cero.")
        continue;
    }

    let tipoDia = esFestivo(diaSemana)
    let sueldo = jornal(horas, turno, tipoDia)

    console.log("--------------------------------------")
    console.log(`Trabajador: ${nombre}`)
    console.log(`Día de trabajo: ${diaSemana} (${tipoDia})`)
    console.log(`Turno: ${turno}`)
    console.log(`Horas trabajadas: ${horas}`)
    console.log(`Sueldo a cobrar: $${sueldo.toFixed(2)}`)
    console.log("--------------------------------------")
}