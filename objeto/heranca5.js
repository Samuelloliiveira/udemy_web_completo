//toda função tem o atributo .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Até a próxima Cowboy do espaço!'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())

//Não substituir métodos que já estão disponíveis no protótipo
//cuidado ao adicionar métodos no protótipo
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Até a próxima!'.reverse())