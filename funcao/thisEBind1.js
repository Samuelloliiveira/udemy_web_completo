const pessoa = { 
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)//fazendo refêrencia ao atributo do objeto pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e OO

/** bind() cria uma nova função que, quando chamada, 
 * tem sua palavra-chave this definida com o valor fornecido */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()