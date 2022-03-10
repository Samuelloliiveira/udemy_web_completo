function aumentoSalarial(plano, salario) {
    let aumento = 0

    switch (plano) {
        case "A":
            aumento = (salario * 10) / 100
            return salario + aumento
        case "B":
            aumento = (salario * 15) / 100
            return salario + aumento
        case "C":
            aumento = (salario * 20) / 100
            return salario + aumento 
        default:
            return "Plano inválido!"
    }
}

console.log(aumentoSalarial("A", 500))