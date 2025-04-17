// Potencia mediante multiplicaciones sucesivas:
// Escriba una función en JavaScript llamada PMS que reciba dos parámetros: B (base) y A (exponente). 
// Calcule B elevado a A mediante multiplicaciones sucesivas de la base. Si el cálculo no puede realizarse, devuelva cero.

const prompt = require('prompt-sync')({sigint: true})


const chalk = require('chalk');


const resultado = (numUno, numDos) => {
    if(isNaN(numDos) || isNaN(numUno)){
        console.log(chalk.bgRed('No se puede realizar el cálculo porque una o las dos cifras no son numéricas!!!!!!!'))
        process.exit(1)
    }
    if(numDos < 0 || numUno < 0){
        console.log(chalk.bgRed('No se puede realizar el cálculo porque una o las dos cifras son negativas!!!!!!!'))
        process.exit(1)
}
   if(numUno === 0 || numDos === 0){
        console.log(chalk.magentaBright('<---- El resultado de la potencia es 1 ---->'))
        process.exit(1)
   }

   const resultado = numUno ** numDos
   console.log(chalk.bgGreenBright(`El resultado de ${numUno} elevado a ${numDos} es: ${resultado}`))
   process.exit(1)
}




console.log(chalk.yellow('====================================================='))
console.log(chalk.yellow('Obtener Potencia mediante Multiplicaciones Sucesivas (PMS)'))
console.log(chalk.yellow('====================================================='))


console.log(chalk.blueBright('Indique 2 números, base y exponente, para calcular la potencia mediante multiplicaciones sucesivas.'))
const numUno = parseInt(prompt('Número Base --->  '))
const numDos = parseInt(prompt('Número Exponente --->  '))

resultado(numUno, numDos)