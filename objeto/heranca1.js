//receba da classe pai atributos e métodos para reuso de código
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


console.log(ferrari.prototype)//objeto não tem o atributo prototype
console.log(ferrari.__proto__)//acessando quem é o protótipo desse objeto
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

/**Um objeto em JS tem referência para o seu protótipo e essa é a forma
 * que JS define Herança.
 * 
 * Ele(JS) procura na cadeia de protótipos até achar a referência, essa é uma
 * forma dele não repetir código (no caso os métodos e atributos)
 * 
 * A forma de um objeto acessar o seu protótipo é a partir do atributo __photo__
 * */