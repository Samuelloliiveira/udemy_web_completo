vetor = [1, 2, 3, 4, 5]

function mediaAritmetica(vetor) {
    let media = 0

    for (let i = 0; i < vetor.length; i++) {
        media += vetor[i]      
    }

    return media/vetor.length
}

console.log(mediaAritmetica(vetor))