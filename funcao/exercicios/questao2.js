function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return 'Equilátero'
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(tipoTriangulo(5,2,1))