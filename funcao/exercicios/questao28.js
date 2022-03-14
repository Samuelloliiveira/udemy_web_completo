const vetor = [6, 66, 33, 80, 61, 92, 64, 49, 44, 6, 80, 39, 32, 10, 9, 26, 68, 64, 100]

function QtdParImpar(vetor) {
    let qtdPares = 0
    let qtdImpares = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            qtdPares++
        }else {
            qtdImpares++
        }
    }

    return `${qtdPares} números pares e ${qtdImpares} números ímpares.`
}

console.log(QtdParImpar(vetor))