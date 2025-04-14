// Ordenar tres números:

// Diseñe un algoritmo en JavaScript que ordene tres números A, B, C en forma ascendente utilizando una función llamada menorMayor 
// que tenga dos parámetros pasados por referencia y devuelva en el primer parámetro el valor menor y en el segundo el valor mayor.

const prompt = require('prompt-sync')({sigint: true})
const chalk = require('chalk')

const arrayNumeros = []

const numero1 = parseInt(prompt(chalk.bgGreen('Ingrese el primer número: ')))
const numero2 = parseInt(prompt(chalk.bgYellow('Digite la segunda cifra: ')))
const numero3 = parseInt(prompt(chalk.bgCyan('Indique el tercer dígito numérico: ')))

if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    console.log(chalk.bgRed('Error: Alguno de los valores ingresados no son números!!!!!!!!!!!!.'))
    return;
}else {
    arrayNumeros.push(numero1)
    arrayNumeros.push(numero2)
    arrayNumeros.push(numero3)
}

const menorMayor = (array) => {
    return array.sort((a, b) =>  a - b )
}

const resultado = menorMayor(arrayNumeros)

console.log(chalk.bgBlue('Los números ordenados de menor a mayor: ' + resultado))
