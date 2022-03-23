// Object.preventExtensions - impede que novas propriedades sejam adicionadas a um objeto
const produto= Object.preventExtensions({
    nome: 'QualquerNome', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha' //permite
produto.descricao = 'Borracha escolar branca'//não permite
delete produto.tag //permite
console.log(produto)

/** Object.seal - sela um Objeto, evitando que novas propriedades sejam 
 * adicionadas à ele e marcando todas as propriedades existentes como não configuráveis.*/
const pessoa = {nome: 'Juliana', idade: 35}
/**quando um objeto é selado, você não consegue: adicionar, excluir
 * mas conseguimos modificar os atributos
 */
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Oliveira' //não permite
delete pessoa.nome //não permite
pessoa.idade = 24
console.log(pessoa)

// Object.freeze = selado + valores constantes
//Não consegue: excluir, incluir, modificar