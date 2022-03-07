function VerificarSeNumeroEDivisivel(numeroInteiro) {

    const resto = numeroInteiro % 3

    if (resto == 0) {
        return true
    }else {
        return false
    }
}

console.log(VerificarSeNumeroEDivisivel(2))