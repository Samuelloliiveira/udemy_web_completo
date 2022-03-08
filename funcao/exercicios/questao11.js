function anoBissexto(ano) {
    let bissexto = (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) ? 'true' : 'false'
    return bissexto
}

console.log(anoBissexto(4))