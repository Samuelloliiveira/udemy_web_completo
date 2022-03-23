function MeuObjeto() {}
console.log(MeuObjeto.prototype)

//criando objeto atráves de uma função construtora usando new
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
/** Todos objetos criado por uma função construtora aponta para o mesmo protótipo*/
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'QualquerNome'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Juliana'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //notação literal de objeto
obj3.nome = 'obj3'
obj3.falar()

//Resumindo...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)