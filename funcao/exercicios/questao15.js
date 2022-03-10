function revendaVeiculos(veiculo) {
    switch (veiculo) {
        case "hatch":
            return "Compra efetuada com sucesso"
        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(revendaVeiculos('hatch'))