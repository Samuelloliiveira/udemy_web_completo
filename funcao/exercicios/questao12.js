function fatorial(numero) {

    let contador = 1

    for (var i = numero; i > 1; i--) {
        contador *= i //multiplica o valor e atribui o resultado a variável
    }

    return contador

}

console.log(fatorial(5))
