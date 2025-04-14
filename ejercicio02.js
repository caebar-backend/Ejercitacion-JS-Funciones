// Suma con tercer argumento:

// Escriba un programa en JavaScript similar al anterior, 
// pero esta vez utilizando una función que tome un tercer argumento y coloque el resultado de la suma en dicho parámetro.

const prompt = require('prompt-sync')({sigint: true})
const chalk = require('chalk')

const sumar = (a, b, callback) => {
    const resultado = a + b
    callback(resultado)
}

const mostrarMensaje = (resultado) => {
    return console.log(chalk.yellow(`El resultado es ---> ${resultado}`))
}

const parametroUno = parseInt(prompt(chalk.green(' Ingrese el primer número: ')))
const parametroDos = parseInt(prompt(chalk.blue(' Ingrese el segundo número: ')))


sumar(parametroUno,parametroDos,mostrarMensaje)
