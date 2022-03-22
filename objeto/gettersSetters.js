const sequencia = {
    //colocar underline na frente não significa que é privado
    _valor: 1, // convenção - mostra que é uma variável que só vai ser acessada internamente
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //linha ignorada porque esta tentando retornar a sequência para um valor menor
console.log(sequencia.valor, sequencia.valor)


//Javascript não permite sobrecarga de métodos