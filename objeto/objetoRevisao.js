//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

// console.table(produto)
delete produto.preco //apagando atributo com delete
delete produto['marca do produto']
// console.log(produto)

const carro = {//objeto
    modelo: 'A4',
    valor: 89000,
    proprietario: {//objeto dentro de outro objeto
        nome: 'Diego',
        idade: 45,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{//array de objetos
        nome: 'Juliana',
        idade: 23
    },{
        nome: 'Diana',
        idade: 35
    }],
    calcularValorSeguro: function(){
        //...
    }
}

//formas de acessar atributos.
carro.proprietario.endereco.numero = 1000

//forma de acessar quando não se conhece os atributos e recebe como string
carro['proprietario']['endereco']['logradouro'] = 'Rua aquário'

// console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)

console.log(carro.condutores)//retorna undefined pois esse atributo foi deletado
// console.log(carro.condutores.length)//erro ao tentar acessar de algo que esta undefined