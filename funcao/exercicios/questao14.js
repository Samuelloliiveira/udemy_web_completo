function frutaria(fruta) {
    switch (fruta) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Erro: não valido!"
    }
}


console.log(frutaria("maçã"))
console.log(frutaria("kiwi"))
console.log(frutaria("melancia"))
console.log(frutaria(2))
console.log(frutaria("celular"))