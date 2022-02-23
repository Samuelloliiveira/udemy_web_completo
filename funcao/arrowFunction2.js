// this não vária dentro de uma arrow function 

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa