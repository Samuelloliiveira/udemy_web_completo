//forma de driblar o this que vária

function Pessoa() {
    this.idade = 0

    const self = this // faz refêrencia a instância do objeto pessoa

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa