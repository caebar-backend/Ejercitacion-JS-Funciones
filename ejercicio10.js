// Sucesión de Fibonacci:

// Diseñe un algoritmo en JavaScript que permita mediante un menú de opciones:
// Ingresar un número y obtener su correspondiente valor en la sucesión de Fibonacci.
// Solicitar un número y determinar si pertenece a la sucesión de Fibonacci mediante la devolución de un valor lógico.

const promptSync = require('prompt-sync')({sigint: true});

const chalk = require('chalk');

let arrayDeNumeros = []

const esFibonacci = (numero) => {
    let a = 0
    let b = 1
    let auxiliar = 0

    while(b <= numero) {
        if(b === numero) {
            
            return console.log(chalk.greenBright('Es fibonacci el número!!'))
        }
        auxiliar = a + b
        a = b
        b = auxiliar
    }
     console.log(chalk.redBright('No es fibonacci el número!!'))
     process.exit(1)
    
}

const fibonacciCalculo = (numero) => {
    let numCero = 0
    let numUno = 1
    let numAux = 0

    if(numero === 0 || numero === 1) {
        return console.log(chalk.greenBright('El número 0 o 1 es fibonacci!!'))
    }
    
   for(let i = 2; i < numero; ) {
        
        numAux = numCero + numUno
        console.log(chalk.yellowBright('Numeros ---> ' + numCero + ' + ' + numUno+ ' + ' + ' = ' + numAux))
        
        if(numAux > numero){
            arrayDeNumeros.push(numCero, numUno, numAux)
            console.log(chalk.cyanBright(`En la sucesión de Fibonacci el número anterior "${arrayDeNumeros[0]}" más el número que escribiste "${arrayDeNumeros[1]}" es igual al siguiente número fibonacci "${arrayDeNumeros[2]}"`))
            console.log(chalk.greenBright('Llegamos al final del calculo!!!!'))
             return;
             
         }
 
        numCero = numUno
        numUno = numAux

        i++

    }
    
}

const pregunta = parseInt(promptSync(chalk.cyanBright('Ingrese un número entero para controlar que sea parte de la sucesión de FIBONACCI ---> ')))

if(isNaN(pregunta)){
    console.log(chalk.redBright('Error: Debe ingresar un número entero!!!'))
}
if(pregunta <=0){
    console.log(chalk.redBright('Error: Debe ingresar un número entero positivo!!!'))
}

esFibonacci(pregunta)
fibonacciCalculo(pregunta)