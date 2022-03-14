let vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetor(vetorPilha, vetorAdiciona) {
    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }

    console.log(`Vetor adicionados: ${vetorAdiciona}`)
    console.log(`Vetor pilha: ${vetorPilha}`)
}

adicionarVetor(vetorPilha, vetorAdiciona)