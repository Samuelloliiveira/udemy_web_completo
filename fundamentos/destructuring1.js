// É um operador de desestruturação, ele tira algo da estrutura(objeto, array)

const pessoa = {
    nome: 'Sam',
    idade: 25,
    endereco: {
        logradouro: 'Rua A',
        numero: 154
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)