// function criarPessoa(nome, sobrenome) {
//     return {
//         nome:  nome,
//         sobrenome: sobrenome
//     }
// }

// console.log(criarPessoa('Juliana', 'Silva'))
// console.log(criarPessoa('Bruno', 'Cunha'))
// console.log(criarPessoa('Antonio', 'Ricardo'))

function criarProduto(nome, preco) {

    const porcentagemDesconto = 5
    const desconto = (porcentagemDesconto * preco) / 100
    const valorComDesconto = preco - desconto

    return {
        nome,
        valorComDesconto,
    }

}

criarProduto()

console.log(criarProduto('caneta', 4))
console.log(criarProduto('notebook', 4000))
console.log(criarProduto('livro', 80.00))