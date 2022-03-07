function jurosSimples(capital, juros, tempo) {
    //retorna o montante
    return capital + (capital * juros * tempo)
}

function jurosCompostos(capital, juros, tempo) {
    // Operador de exponenciação (**)
    return capital * (1 * juros) ** tempo
}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosCompostos(100, 10/100, 2))