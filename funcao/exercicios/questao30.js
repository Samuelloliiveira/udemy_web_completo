vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

function MaiorMenorNumero(vetor) {
    const maiorNumero = Math.max.apply(null, vetor)
    const menorNumero = Math.min.apply(null, vetor)

    return `
        O maior número do vetor é ${maiorNumero}
        O menor número do vetor é ${menorNumero}`
}

console.log(MaiorMenorNumero(vetor))