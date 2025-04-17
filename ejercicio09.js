// Módulos variados:

// Realice un programa en JavaScript que incluya los siguientes módulos:
// Menú: tiene un parámetro entero pasado por referencia que devuelve una opción.
// Bienvenida: sin parámetros que muestra un mensaje de bienvenida.
// Resto: acepta dos parámetros enteros y devuelve un número entero que es el resto de la división entera del primer parámetro sobre el segundo parámetro (sin utilizar el operador MOD).
// EsPar: devuelve el valor lógico "verdadero" o "falso" según si el número que se indique como parámetro es par o no.
// NumeroACadena: acepta un parámetro entero número entre 0 y 10, y devuelve una cadena de caracteres que representa el número en letras.
// Intercambio: acepta dos parámetros pasados por referencia que intercambian los valores de los parámetros.
// Pida al usuario dos números y muestre la "distancia" entre ellos (el valor absoluto de su diferencia, de modo que el resultado sea siempre positivo).

const prompt = require('prompt-sync')({sigint: true})
const chalk = require('chalk')

const calcularDistanciaNumeros = (uno, dos) => {

    if(isNaN(uno) || isNaN(dos)){
        console.log(chalk.red("Error: Los valores ingresados no son números."))
        menuPrincipal()
    }
    if(uno < 0 || dos < 0){
        console.log(chalk.red("Error: Los números deben ser positivos."))
        menuPrincipal()
    }

    const final = Math.abs(uno - dos) - 1
    console.log(chalk.bgGray('La distancia entre los números es: ' + "-- " + final + " --" + ' unidades entre medio de los dos'))
    menuPrincipal()
}

const intercambioValores= (valorUno, valorDos) => {

    const objetoValores = []

    objetoValores.push({
            "ValorUno": valorUno, 
            "ValorDos": valorDos,
    })

    console.log(" Los valores originales son: ")
    console.log(objetoValores)

   const cambioUno = objetoValores[0].ValorUno
   const cambioDos = objetoValores[0].ValorDos

   objetoValores.splice(0)

   objetoValores.push({
    "ValorUno": cambioDos,
    "ValorDos": cambioUno,
   })
    console.log('')
    console.log(" Los valores alternados son: ")
    console.log(objetoValores)

    menuPrincipal()



}

const numeroACadena = (numero) => {
    const numerosEnletras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"]

    if(isNaN(numero)){
        console.log(chalk.redBright(` Error : El valor ingresado no es un número!!! `))
        menuPrincipal()
    }
    if(numero < 0){
        console.log(chalk.redBright(` Error : El valor ingresado no es positivo ni es cero!! `))
        menuPrincipal()
    }
    if(numero > 10){
        console.log(chalk.redBright(` Error : El valor ingresado no es menor o igual a 10!!! `))
        menuPrincipal()
    }
    
    const numeroElegido = numerosEnletras[numero]
    const resolucion = numeroElegido.toUpperCase()

    console.log(chalk.greenBright(` El número ingresado se denomina ---> " ${resolucion} " <--- `))
    menuPrincipal()
    




}

const esPar = (parametroAnalizar) => {
    
    if(isNaN(parametroAnalizar)){
        console.log(chalk.redBright(' Error: El valor ingresado no es un número!!! '))
        menuPrincipal()
    }
    if(parametroAnalizar <= 0){
        console.log(chalk.redBright(` Error: El valor ingresado debe ser un número entero positivo " MAYOR a 0 "!!! `))
        menuPrincipal()
    }

    const final = parametroAnalizar % 2

    if(final === 0){
        console.log(chalk.magenta(` El número ${parametroAnalizar} es par!!!. Finalización ----> VERDADERO `))
        menuPrincipal()
    }else{
        console.log(chalk.magenta(` El número ${parametroAnalizar} es impar!!!. Resolución ----> FALSO `))
        menuPrincipal()
    }


}

const resto = (parametroUno, parametroDos) => {
    const numeroUno = parametroUno
    const numeroDos = parametroDos
    
    if(isNaN(parametroUno) || isNaN(parametroDos)){
        console.log(chalk.redBright(" Error: Los parámetros deben ser números enteros! "))
        menuPrincipal()
        
    }
    if(parametroUno < 0 || parametroDos < 0){
        console.log(chalk.redBright(" Error: Los parámetros deben ser números enteros positivos! "))
        menuPrincipal()
    }

    const resultadoUno = parametroUno - parametroDos * Math.floor(parametroUno / parametroDos)
    const resultadoDos = numeroDos - numeroUno * Math.floor(numeroDos / numeroUno)

    console.log(chalk.greenBright(` El resto de la división entera entre "${numeroUno}" dividido "${numeroDos}" es "${resultadoUno}" `))
    console.log(chalk.greenBright(` El resto de la división entera entre "${parametroDos}" dividido "${parametroUno}" es "${resultadoDos}" `))

    menuPrincipal()

}

const bienvenida = (parametro) => {
    console.log(chalk.magentaBright(` ${parametro}, Bienvenid@ a mi programa de JavaScript! \n Espero que disfrutes tu estancia en esta apliación. \n ¡Que tengas un buen día!\n`))
    menuPrincipal()

}


const menuPrincipal = () => {
    console.log("\n")
    console.log(chalk.yellowBright(" ¿Qué Desea Hacer?"))
    console.log(chalk.yellowBright(" Indique el número de la opción que desee: "))
    console.log(chalk.yellowBright(" || 1 - Menú || 2 - Bienvenida || 3 - Resto || 4 - EsPar || 5 - Número a Cadena || 6 - Intercambio || 7 - Distancia entre Números || 8 - Salir "))
    const pregunta = prompt(chalk.yellowBright(" ---> "))
     
    const respuesta = parseInt(pregunta)

    switch(respuesta){
        case 1:
            menuPrincipal()
            break;
            case 2:
                const nombreApellido = prompt(chalk.cyanBright(" Ingrese su nombre y apellido: ")).toUpperCase()
                bienvenida(nombreApellido)
                break;
                case 3: 
                const parametroUno = parseInt(prompt(chalk.cyanBright(" Ingrese el primer número: ")))
                const parametroDos = parseInt(prompt(chalk.cyanBright(" Ingrese el segundo número: ")))
                resto(parametroUno,parametroDos)
                break;
                case 4:
                    const numeroEsPar = parseInt(prompt(chalk.magentaBright(" Ingrese un número para analizar si es Par o nó, y obtener Verdadero o Falso como resultado : ")))
                    esPar(numeroEsPar)
                    break;
                    case 5:
                        const numeroCadena = parseInt(prompt(chalk.greenBright(" Ingrese un número para convertirlo a cadena letras: ")))
                        numeroACadena(numeroCadena)
                        break;
                        case 6:
                            const valorUno = prompt(chalk.cyanBright(" Ingrese el primer valor para intercambiar (Número, Simbolo, letra, etc): "))
                            const valorDos = prompt(chalk.cyanBright(" Ingrese el segundo valor para intercambiar (Número, Símbolo, letra, etc): "))
                            intercambioValores(valorUno,valorDos)
                            break;
                            case 7:
                                const numONE = prompt(chalk.bgGray(" Ingrese un número para calcular la distancia entre el segundo "))
                                const numTWO = prompt(chalk.bgGray(" Ingrese un número para calcular la distancia entre el primero "))
                                calcularDistanciaNumeros(numONE, numTWO)
                                break;
                                
                                case 8:
                                console.log(chalk.redBright("¡Hasta luego!"))
                                process.exit(0)
                                break;

                                default:
                                    console.log(chalk.redBright("Opción no válida"))
                                    menuPrincipal()
                                    break;

    }

}

menuPrincipal()
