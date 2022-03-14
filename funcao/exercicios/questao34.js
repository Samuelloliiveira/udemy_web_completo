function trueFalseCaracteres(string1, string2) {
    let estaContido = true

    //for dentro de for, de cada string verificada
    for (let i = 0; i < string1.length; i++) {

        /**pega todas as letas da palavra de acordo com o indice, 
         * e também deixa tudo em minúsculo
         */
        let caractereString1 = string1.charAt(i).toLowerCase()

        for (let j = 0; j < string2.length; j++) {

            let caractereString2 = string2.charAt(j).toLowerCase()

            /**Já com as duas string em minúsculo e cada letra separada ele verifica
             * se a letra no indece x e igual a mesma da outra string
             */
            if (caractereString1 == caractereString2) {
                //se a letra for igual ele coloca true no estaContido e para o loop
                estaContido = true
                break
            } else {
                estaContido = false //se não ele coloca false e continua o loop
            }
        }
        if (!estaContido) {//nega que é verdadeiro e retorna
            return estaContido
        }
    }
    return estaContido
}

console.log(trueFalseCaracteres('abc','cba'))