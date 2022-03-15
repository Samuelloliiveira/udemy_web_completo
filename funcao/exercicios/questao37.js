function progressaoAritmetica(n, a1, r) {

    for (let i = 0; i <= n; i++) { //n é a quantidade de termos
        /**pegando o termo e somando a razão até encontrar todos os termos
         * dentro da quantidade n. Para isso a razão sempre vai ser multiplicada
         * pelo próximo i da sequencia*/
        console.log(`${[i]}:`, a1 + r * i)
    }

    //soma dos n termos consecutivos da sequência
    console.log('Soma: ' + (n * (a1 + (a1 + ((n - 1) * r)))) / 2)
}

function progressaoGeometrica(n, a1, r) {
    for (let i = 0; i < n; i++) {
        //o resultado é sempre multicado pela razão até a quantidade n de vezes
        console.log(`${[i]}:`, a1 * (r ** i))
    }

    //calculo de todos os termos da progressão
    console.log('Soma: ' + (a1 * ((r ** n) - 1)) / (r - 1))
}

progressaoAritmetica(10, 10, 15)
console.log("-------------------------")
progressaoGeometrica(10, 2, 2)