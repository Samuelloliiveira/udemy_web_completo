function valorPlanoDeSaude(idade) {
    const valorSemAdicional = 100
    const adcionais = [80, 50, 95, 130]
    
    let adcional = 0

    if (idade < 10) {
        adcional = adcionais[0]
    } else if (idade >= 10 && idade <= 30) {
        adcional = adcionais[1]
    } else if (idade > 30 && idade <= 60) {
        adcional = adcionais[2]
    } else if (idade > 60) {
        adcional = adcionais[3]
    }

    let valorPago = valorSemAdicional + adcional

    return `O plano fica no valor de R$ ${valorPago} por mês`
}

console.log(valorPlanoDeSaude(8))