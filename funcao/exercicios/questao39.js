let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

function trocaVetor(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i] // vetorA[0] = 5
            vetorB[i] = vetorA[i] - vetorB[i] //  vetorB[0] = 1
            vetorA[i] = vetorA[i] - vetorB[i] // vetorA[0] = 4

            /**Basicamente é feita a troca dos valores apartir da soma e subtração
             * ele faz isso para todos os índice usando o laço for. 
             */
        }

        //contatenando a string texto com os valores do vetor
        console.log('Novo vetorA: ' + vetorA) 
        console.log('Novo vetorB: ' + vetorB)
        
        
    } else {
        console.log('Vetores com tamanho diferente!')
    }
}

trocaVetor(vetorA, vetorB)
