const pai = {nome: 'Samuel', corCabelo: 'preto'}

const filha1 = Object.create(pai)//cria um objeto novo usando como protótipo o objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)//localiza o atributo do pai

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' //não é possível mudar o nome (writable)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    /*hasOwnProperty() retorna um booleano indicando se o objeto 
    possui a propriedade especificada*/
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}