// Conversión de minúscula a mayúscula:

// Escriba un programa en JavaScript que utilice una función que reciba un carácter como parámetro,
//  si el carácter es una letra minúscula, modifique el parámetro para convertirlo en mayúscula.

const prompt = require('prompt-sync')({sigint: true})
const chalk = require('chalk')

const parametroMayuscula = (caracter) => {
    if(isNaN(caracter)){
    return caracter.toUpperCase()
    }
    else{
    return "No es una letra lo que escribió!!!!!!!"
    }
}

const ingreso = prompt('Ingrese un caracter no numérico en minúscula: ----> ')

const ingresoTransformado = ingreso.toLowerCase()

const resultado = parametroMayuscula(ingresoTransformado)

console.log(chalk.bgGreen(' ---> '+ ' El caracter transformado a MAYÚSCULAS es ----> ' + resultado + ' <--- '))