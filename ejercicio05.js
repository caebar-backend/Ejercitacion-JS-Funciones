// Factorial de un número:

// Escriba un programa en JavaScript con una función que reciba un valor entero positivo y devuelva su factorial.

const prompt = require('prompt-sync')({sigint: true})
const chalk = require('chalk')

const calcularFactorial = (numero) => {
    if(numero === 0 || numero === 1){
        return 1
    }
    if(isNaN(numero)){
        return "Error: El valor ingresado no es un número entero."
    }
    if(numero < 0){
        return "Error: El valor ingresado no es un número entero positivo."
    }

   let factorial = 1
   for(let i = 2; i <= numero; i++){
    factorial *= i
   }
   return factorial
}

const pregunta = parseInt(prompt(chalk.greenBright(' Escriba un número para calcular el factorial ---> ')))

const resultado = calcularFactorial(pregunta)
console.log(chalk.blueBright(`<--- El factorial de ${pregunta} es ${resultado} --->`))



