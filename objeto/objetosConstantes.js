// pessoa -> aponta para um endereço de memória -> dentro é colocado o objeto
const pessoa = { nome: 'Samuel' }
pessoa.nome = 'Diego'
console.log(pessoa)

//a constante pessoa não pode ser alterada
// pessoa = { nome: 'Ana'}


//transformando o objeto em constante
Object.freeze(pessoa)//congelando o objeto pessoa
pessoa.nome = 'Maria'//não é possível mudar o valor do atributo por que ele esta congelado
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//criando um objeto constante que não pode ser mudado nem a referência e nem o objeto
const pessoaConstante = Object.freeze({nome: 'Filipe'})
pessoaConstante.nome = 'Maria' //Não muda
console.log(pessoaConstante)
