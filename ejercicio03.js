// Función F(X, Y):

// Haga un programa en JavaScript que llame a la función F(X, Y) = 5.6 * X + Y / 2.5 y que muestre los resultados para F(3, 5); F(9, 2) y F(56, 87).

const chalk = require('chalk')

let X
let Y

const F = (X, Y) => {
    return 5.6 * X + Y / 2.5
}

console.log(chalk.bgGreen(` Resultado de F(3, 5) = ${F(3, 5)}    `))
console.log(chalk.bgGray(` Finalizacion para F(9, 2) = ${F(9, 2)}   `))
console.log(chalk.bgBlue(` Resolución de la operación F(56, 87) = ${F(56, 87)} `))

