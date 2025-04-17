// Conversión de monedas:

// Escriba una función en JavaScript llamada ConversionPesos que permita convertir una cantidad de dinero dada en dólares, libras, yenes o euros a Pesos Argentinos. Utilice las siguientes equivalencias aproximadas:
// 1 libra = 905.75 pesos
// 1 dólar = 1305.75 pesos
// 1 yen = 8.69 pesos
// 1 euro = 968.52 pesos

const prompt = require('prompt-sync')({sigint: true})

const chalk = require('chalk')
const nodeNotifier = require('node-notifier')

let ok
let moneda

while(true){
console.log(chalk.bgYellow(' <------------------------------------------------------------------------------------> '))
console.log(chalk.bgYellow(' <---------------------Conversión de monedas extranjeras a Pesos---------------------> '))
console.log(chalk.bgYellow(' <------------------------------------------------------------------------------------> '))
console.log(chalk.yellow(' <--|| 1  Libras (GBP) || 2  Dolar (uSd) || 3  Yenes (JPY) || 4  Euros (EUR) || 0 / -0  Salir --> '))
 
moneda = parseInt(prompt(chalk.yellowBright(' Ingrese el número de la moneda correspondiente: ')))

if(isNaN(moneda)){
    console.log(chalk.red(' Error!!!!, no ingreso un dígito numérico!!! '))
    continue;
}
if(moneda < 0){
    console.log(chalk.red(' Error!!!!, no ingreso un número correspodiente al menú de opciones!!! '))
    continue;
}

break;
}

switch(moneda){

    case 0: 
    console.log(chalk.bgRedBright(' <<<< ¡¡¡¡¡¡¡¡¡¡¡¡¡¡ Se cierra el programa, elegiste 0 o -0 como opción !!!!!!!!!!!!!!! >>>>> '))
    process.exit(0);
    case 1:
    const libras = parseFloat(prompt(chalk.yellowBright(' Ingrese la cantidad de libras a convertir en pesos: ')))
    const librasPesos = libras * 905.75
    console.log(chalk.bgBlue(` La cantidad de ${libras} libras equivale a ${librasPesos} pesos argentinos `))
    break;
    case 2:
        const dolares = parseFloat(prompt(chalk.yellowBright(' Ingrese la cantidad de dólares a convertir en pesos: ')))
        const dolaresPesos = dolares * 1305.75
        console.log(chalk.bgBlue(` La cantidad de ${dolares} dólares equivale a ${dolaresPesos} pesos argentinos `))
        break;
        case 3:
            const yenes = parseFloat(prompt(chalk.yellowBright(' Ingrese la cantidad de yenes a convertir en pesos: ')))
            const yenesPesos = yenes * 8.69
            console.log(chalk.bgBlue(` La cantidad de ${yenes} yenes equivale a ${yenesPesos} pesos argentinos `))
            break;
            case 4: 
            const euros = parseFloat(prompt(chalk.yellowBright(' Ingrese la cantidad de euros a convertir en pesos: ')))
            const eurosPesos = euros * 968.52
            console.log(chalk.bgBlue(` La cantidad de ${euros} euros equivale a ${eurosPesos} pesos argentinos `))
            break;
            default:
                console.log(chalk.bgRed(' La opcion ingresada no es válida '))
                break;
}



