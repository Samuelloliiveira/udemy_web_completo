vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
qtdNumerosNoIntervalo = 0
qtdNumerosForaDoIntervalo = 0

function intervalo(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            qtdNumerosNoIntervalo++
        }else {
            qtdNumerosForaDoIntervalo++
        }
    }

    return `
        ${qtdNumerosNoIntervalo} números dentro do intervalo.
        ${qtdNumerosForaDoIntervalo} números fora do intervalo.
    `
}

console.log(intervalo(vetor))