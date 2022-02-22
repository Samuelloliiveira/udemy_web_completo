//for in te dar o indice dos elementos do array

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (const i in notas) {
    // console.log(i, notas[i])
}

//também podemos pegar os atributos de um objeto
const pessoa = {
    nome: 'Sam',
    sobrenome: 'Oliveira',
    idade: 25,
    peso: '58'
}

for (const atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}