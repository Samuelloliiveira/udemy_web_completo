//criando os três vetor
const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
const vetorDouble = [1.1, 2.2, 3.3, 4.4]

/**(...) no final, são "parâmetros de descanso" e reúnem o restante da lista de argumentos
 * em uma matriz/vetor
 * 
 * (...) na chamada da função ou similar, e chamado de "operador de propagação" e expande uma matriz
 * em uma lista
 */
function concatenar(...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        //concat serve para unir 
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))