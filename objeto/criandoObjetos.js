//usando a notação literal
const obj1 = {}
console.log(obj1)

// ---------------------------------------------

//Object em Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object //atráves de uma função construtora
console.log(obj2)

// ---------------------------------------------

// Função construtora -criando as próprias funções construtora
function Produto(nome, preco, desc) {//preco e desc está encapsulado
    this.nome = nome //variável publica/não esta encapsulada. Qualquer pessoa pode alterar o valor
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// ---------------------------------------------
//Função Factory (factory é um padrão de projeto, é uma função que cria alguma coisa)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// ---------------------------------------------
//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// ---------------------------------------------
//Uma função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)