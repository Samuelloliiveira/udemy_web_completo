let vetor = [1, 2, 3, 4, 5]
let vetor1 = [1, 2, 3, 4, 5, 8, 6, 20, 15]

function multiplicaVetor(vetor, multiplicador) {
    let newVetor = []

    for (let i = 0; i < vetor.length; i++) {
        newVetor.push(vetor[i] * multiplicador)
    }

    return newVetor
}

function multiplicaVetorMaiorCinco(vetor1, multiplicador) {
    let newVetor = []

    for (let i = 0; i < vetor1.length; i++) {
        if (vetor1[i] > 5) {
            newVetor.push(vetor1[i] * multiplicador)
        }
    }

    return newVetor
}


console.log(multiplicaVetor(vetor, 3))
console.log(multiplicaVetorMaiorCinco(vetor1, 3))