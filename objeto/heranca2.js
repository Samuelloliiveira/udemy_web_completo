//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //não é uma boa prática, não fazer
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
// console.log(filho.attr1)//procura na cadeia de protótipos até achar
// console.log(filho.attr0)
// console.log(filho.attrA)//não existe na cadeia de protótipos
// console.log(filho.attr2)
// console.log(filho.attr3)//exibe o primeiro que achar (sobreamento)

//this referênciar o objeto atual
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing do atributo original de carro
}

const volvo = {
    modelo: 'V40',
    status() { //
        //super para referênciar o protótipo
        return `${this.modelo}: ${super.status()}`
    }
}

//relação de protótipo usando uma função
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


/**Por padrão quando um objeto é chamado e o toString é chamada
 * ele vai ler os atributos e as funções que pertecem ao objeto,
 * mas não significa que não podemos chamar os métodos que estão no protótipo*/
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())