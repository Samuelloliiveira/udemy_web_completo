const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 5.2, 3.6]

//Sem callback
const notasBaixas = []
for (const i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
const notasAltas = notas.filter(function (nota) {
    /**filter() cria um novo array com todos os elementos 
     * que passaram no teste */
    return nota > 7
})

console.log(notasAltas)

//com arrow function
const notasAltas2 = notas.filter(nota => nota > 7)
console.log(notasAltas2)