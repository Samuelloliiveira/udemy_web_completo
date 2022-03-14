function mediaPonderada(codigo, nota1, nota2, nota3) {
    let notas = [] 
    notas.push(nota1, nota2, nota3) //populando o array com as notas
    notas.sort().reverse()//sort coloca em ordem, reverse inverte a ordem

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    return `Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`

}

console.log(mediaPonderada(123, 2.8, 6, 3.5))