function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
// o operador new retorna um objeto criado a partir de uma função
function novo(f, ...params) {
    const obj = {}//crinado objeto com notação literal

    /**associado o protótipo do objeto ao atributo prototype 
     * da função(f) passada como paramentro */
    obj.__proto__ = f.prototype

    f.apply(obj, params)//executa a função(f) passando obj e os parâmetros recebidos
    return obj //retorna o objeto criado
} 

/**executa a função novo passando os atríbutos para a função Aula */
const aula3 =  novo(Aula, 'Bem Vindo', 123)
const aula4 =  novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)