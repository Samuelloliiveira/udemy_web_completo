function CalcularDivisao(valor1, valor2) {
    //Math.floor retorna o menor número inteiro
    const resultado = Math.floor(valor1 / valor2)
    const resto = valor1 % valor2
    
    console.log(`O resultado é ${resultado} e o resto da divisão é ${resto}`)
}

CalcularDivisao(3,2)