// Desestruturando de uma função com objeto

function rand({ min = 0, max = 1000 }) {
    // A função Math.random() retorna um número pseudo-aleatório
    const valor = Math.random() * (max - min) + min
    // A função Math.floor() retorna o menor número inteiro
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))