function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Fim de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
        case 7:
            return 'Fim de semana'
        default:
            return 'Dia inválido!'
    }
}

console.log(diaDaSemana(5))
console.log(diaDaSemana('a'))
console.log(diaDaSemana(7))
