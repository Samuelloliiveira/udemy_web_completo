/**A diferença entre call e Apply e a forma que os 
 * parâmetros são passados na hora de invocar a função */

/**Call e Apply são formas de passar paramêtros para a função
 * de forma que o this tenha acesso
 */

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20 //passando de forma global para que o this tenha acesso
global.desc = 0.1

//Formas de chamar uma função
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//usando call passamos os paramêtros diretamente na função
console.log(getPreco.call(carro, 0.17, '$'))

//em apply precisa passar como array
console.log(getPreco.apply(global, [0.17, '$']))