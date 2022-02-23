/**Uma função callback é uma função passada a outra função como 
 * argumento, que é então invocado dentro da função externa para 
 * completar algum tipo de rotina ou ação. */
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))