//Duas palavras reservadas que causa um desvio de fluxo

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (x in nums) {
    if (x == 5) {
        /**break não age no bloco if
         * ele age no bloco mais próximo dele
         * que seja do tipo: for, while, switch
         */
        break //interrope o laço e passa para a próxima sentença de código que ele esta relacionado
    }
    // console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        //continue faz sentido para usar em estrutura de repetição
        continue //interrope a repetição atual e passa para a próxima
    }
    // console.log(`${y} = ${nums[y]}`)
}

//ESTRUTURA DE EXEMPLO, NÃO USE, NÃO É UMA BOA PRÁTICA
externo: for (a in nums) {
    for (b in nums) {
        //criando uma atribuição para que o break funcione em um for mais externo
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim!')