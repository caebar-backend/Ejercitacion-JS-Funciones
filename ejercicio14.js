// Cálculo de salario de empleados:

// Escriba un programa en JavaScript para calcular el salario y mostrar el detalle de los empleados de una fábrica. 
// Los empleados tienen un sueldo básico común y se adiciona un 10% por cada aumento de categoría, un 5% por cada año de antigüedad. 
// A todos los empleados se les descuenta un 11% por aportes jubilatorios y un 4% por obra social, ambos del sueldo básico. 
// Finalmente, se añade un aumento fijo de $200 en concepto de salario familiar por cada hijo menor de 18 años. 
// El programa deberá contar con una función denominada Aumento y una función denominada Descuentos.


const prompt = require('prompt-sync')();


function Aumento(sueldoBasico, categoria, antiguedad, hijos) {
    let aumentoCategoria = sueldoBasico * (0.10 * categoria)
    let aumentoAntiguedad = sueldoBasico * (0.05 * antiguedad)
    let aumentoFamiliar = hijos * 200

    return aumentoCategoria + aumentoAntiguedad + aumentoFamiliar
}


function Descuentos(sueldoBasico) {
    let descuentoJubilatorio = sueldoBasico * 0.11
    let descuentoObraSocial = sueldoBasico * 0.04

    return descuentoJubilatorio + descuentoObraSocial
}


const sueldoBasico = parseFloat(prompt("Ingrese el sueldo básico común: "))

while (true) {
    let dni = parseInt(prompt("Ingrese el código (DNI) del empleado o 999 para salir: "))

    if (dni === 999) {
        console.log("Finalizando ingreso de datos...")
        break;
    }

    let categoria = parseInt(prompt("Ingrese la categoría del empleado: "))
    let antiguedad = parseInt(prompt("Ingrese la cantidad de años de antigüedad: "))
    let hijos = parseInt(prompt("Ingrese el número de hijos menores de 18 años: "))

    if (categoria < 0 || antiguedad < 0 || hijos < 0) {
        console.log("Error: Los valores de categoría, antigüedad y cantidad de hijos deben ser mayores o iguales a cero.")
        continue;
    }

    let aumentos = Aumento(sueldoBasico, categoria, antiguedad, hijos)
    let descuentos = Descuentos(sueldoBasico);
    let sueldoFinal = sueldoBasico + aumentos - descuentos

    console.log(`DNI: ${dni}`);
    console.log(`Sueldo Básico: $${sueldoBasico.toFixed(2)}`)
    console.log(`Total Aumentos: $${aumentos.toFixed(2)}`);
    console.log(`Total Descuentos: $${descuentos.toFixed(2)}`)
    console.log(`Sueldo Final: $${sueldoFinal.toFixed(2)}`)
    console.log("--------------------------------------")
}