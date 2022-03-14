function valorAnuidade(mes, valor) {
    /**se o mês for maior que 0 e menor que 13 então */
    if(mes > 0 && mes < 13) {
        atraso = mes - 1 // atraso vai ser o mês passado menos 1

        //retorna o valor com juros de 5% sobre o valor, com regime composto
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(valorAnuidade(4, 100))