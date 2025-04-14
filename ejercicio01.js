// Suma de dos números:

// Escriba un programa en JavaScript con una función que tome como parámetros dos enteros, los sume y devuelva como resultado la suma. 
// El programa deberá pedir al usuario los dos números, luego llamar a la función con los números leídos como argumentos y, 
// por último, informar al usuario el valor de la suma.

const prompt = require('prompt-sync')({sigint: true})
const chalk = require('chalk')

const sumar = (a, b) => {
    return a + b
}

const num1 = parseInt(prompt(chalk.cyanBright(' Escriba un número ---> ')))
const num2 = parseInt(prompt(chalk.greenBright(' Escriba otro número ---> ')))

const resultado = sumar(num1, num2)

console.log(chalk.yellow('----- El resultado de la suma es : ' + resultado + ' ------')) 
