function sacarDinheiro(valorSaque) {

    //contador que recebe o número de notas necessárias
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0

    //passando o valor do saque para a função calcular o valor da nota
    let valorNota = calcularValorNota(valorSaque)

    /**enquanto o valor de saque for mais que o valor da nota faça */
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100: //se caso o valor da nota for 100
                valorSaque -= 100 //o valor do saque vai ser retirado 100
                contador100++ // e o contador100 vai receber 1 (que é referente ao número de notas)
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        /**valorNota vai sempre receber um valor de saque novo para ser validado
         * até que o valor da nota seja maior que o valor de saque*/
        valorNota = calcularValorNota(valorSaque)

    }

    /**depois que a while chegar ao fim é passado o resultado do contador para a função 
     * elavorarResultado*/
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}


/**Nessa função retorna os casos com os valores que precisa ser validado 
 * dentro do while na função sacarDinhiero */ 
function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

//essa função retorna o resultado a ser mostrado na tela caso o contador seja maior que 0
function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    //se o contador100 tiver algum número maior que 0 mostra, se não, não acresenta nada no resultado
    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado //retornando o resultado para ser mostrado no console
}

//passando o valor para a função sacarDinheiro
console.log(sacarDinheiro(153))