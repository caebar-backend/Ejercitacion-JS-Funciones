// Operaciones sobre un número:

// Escriba un programa en JavaScript que permita introducir un número por teclado y sobre él se realicen las siguientes operaciones: 
// mostrar la cantidad de divisores, hallar su factorial, comprobar si es primo e imprimir su tabla de multiplicar.

const prompt = require('prompt-sync')({sigint: true})
const chalk = require('chalk')

const arrayTablaMultiplicar = []

const calcularFactorial = (numero) => {

    if(numero === 0 || numero === 1){
        return 1
    }
    if(numero < 0){
        return "No se puede calcular el factorial de un número negativo!!!"
    }
    if(isNaN(numero)){
        return "No se puede calcular el factorial porque no es un número!!!"
    }

    let factorial = 1
    for(let i = 2; i <= numero; i++){
        factorial *= i
    }
    return factorial
}

const cantidadDeDivisiores = (numero) => {
    if(isNaN(numero)){
        return "No se puede calcular la cantidad de divisores porque no es un número!!!"
    }
    if(numero < 0){
        return "No se puede calcular la cantidad de divisores de un número negativo!!!"
    }

    let divisores = 0
    
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            divisores += 1
        }
    
    }
    return divisores
}

const esPrimo = (numero) => {
    if(isNaN(numero)){
        return "No se puede comprobar si es primo porque no es un número!!!"
    }
   
    if(numero <= 1){
        return '<< No es Número Primo >>'
    }
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            return '<< No es Número Primo >>'
        }
        return '<< Es Número Primo >>'
    }

}

const tablaDeMultiplicar = (numero) => {
    if(isNaN(numero)){
        return "No se puede calcular la tabla de multiplicar porque no es un número!!!"
    }
    if(numero < 0){
        return "No se puede calcular la tabla de multiplicar de un número negativo!!!"
    }
    let guardo
    for(let i = 1; i <= 10; i++){
     guardo = `${numero} x ${i} = ${numero * i}\n`
     arrayTablaMultiplicar.push(guardo)
    }
    return arrayTablaMultiplicar
}

const pregunta = parseInt(prompt(chalk.cyanBright(' Escribe un número para ser analizado ----> ')))

let resultadoUno = calcularFactorial(pregunta)
let resultadoDos = esPrimo(pregunta)
let resultadoTres = tablaDeMultiplicar(pregunta)
let resultadoCuatro = cantidadDeDivisiores(pregunta)

console.log(chalk.yellowBright(`<----------- Factorial Total del Número --------------> `))
console.log(chalk.yellowBright(resultadoUno))
console.log(chalk.yellowBright(`<------------------------------------------------> `))
console.log(chalk.greenBright(`<-------------------- Es Primo? -----------------------> `))
console.log(chalk.greenBright(resultadoDos))
console.log(chalk.greenBright(`<-------------------------------------------------------->`))
console.log(chalk.blueBright(`<------------------------ Tabla de Multiplicar ------------------------> \n`))
console.log(chalk.blueBright(resultadoTres))
console.log(chalk.blueBright(`<-------------------------------------------------------------------------->`))
console.log(chalk.magentaBright(`<------------------------ Cantidad de Divisores ------------------------> `))
console.log(chalk.magentaBright(resultadoCuatro))
console.log(chalk.magentaBright(`<------------------------------------------------------------------------->`))