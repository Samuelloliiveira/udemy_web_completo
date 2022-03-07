function bhaskara(ax2, bx, c) {
    const delta = (bx ** 2) - (4 * ax2 * c)

    if(delta < 0) {
        return 'Delta é Negativo'
    }else {
        let valor = []

        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)

        valor.push(x1)
        valor.push(x2)

        return valor
    }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
