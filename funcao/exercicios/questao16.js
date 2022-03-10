function calculadoraBasica(valor1, valor2, operacao) {

    switch (operacao) {
        case "+":
            return valor1 + valor2
        case "-":
            return valor1 - valor2
        case "*":
            return valor1 * valor2
        case "/":
            return valor1 / valor2
        default:
            return "Operação inválida!"
    }
}

console.log(calculadoraBasica(2, 3, "+"))
console.log(calculadoraBasica(2, 3, "-"))
console.log(calculadoraBasica(2, 3, "*"))
console.log(calculadoraBasica(2, 3, "/"))