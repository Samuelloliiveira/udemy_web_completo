let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//Testando o mesmo comportamento com arrow function
comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

/*arrow function é mais forte que o bind no contexto para qual
*o this aponta (no caso o objeto que ele aponta)*/
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/**o this de uma função arrow é associado ao contexto
 * no qual a função foi escrita, e não tem variação.
 */