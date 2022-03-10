const cardapio = {
    100: {
        produto: "Cachorro Quente",
        preco: 3.00
    },

    200: {
        produto: "Hambúrguer Simples",
        preco: 4.00
    },

    300: {
        produto:"Cheeseburguer",
        preco: 5.50
    },

    400: {
        produto:"Bauru",
        preco: 4.50
    },

    500: {
        produto:"Refrigerante",
        preco: 3.50
    },

    600: {
        produto:"Suco",
        preco: 2.80
    }

}

function lanchonete(codigoPedido, quantidade) {

    const valorPago = quantidade * cardapio[codigoPedido].preco
    const frase = "O total do seu pedido é R$"

    switch (codigoPedido) {
        case 100:
        case 200:
        case 300:
        case 400:
        case 500:
        case 600:
            return `Saíndo ${quantidade} ${cardapio[codigoPedido].produto}, ${frase} ${valorPago}`
        default:
            return 'Produto não existente.'
    }
}

console.log(lanchonete(300, 5))