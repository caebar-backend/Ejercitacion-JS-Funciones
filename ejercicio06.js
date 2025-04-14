// Mayor de tres números:

// Cree una función en JavaScript llamada MayorDeTres, 
// que reciba tres números enteros y devuelva el valor del mayor de ellos. Por ejemplo, para los números 5, 7 y 5, devolvería el valor 7.

const prompt = require('prompt-sync')({sigint: true})
const chalk = require('chalk')


const mayorNumero = (a, b, c) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return 'Error: No se ingresaron números enteros en todas las respuestas!!!!!!!!!'
    }
    return Math.max(a, b, c)
}


let num1 = parseInt(prompt(chalk.yellow('Ingrese el primer número: ' )))
let num2 = parseInt(prompt(chalk.cyan('Ingrese el segundo número: ' )))
let num3 = parseInt(prompt(chalk.magenta('Ingrese el tercer número: ')))

const resultado = mayorNumero(num1, num2, num3)

console.log(chalk.bgRed(` <--- El mayor de los tres números es: ${resultado} ---> `))

