function DinheiroFormaCorreta(value) {
    //O método toFixed() formata um número utilizando notação de ponto fixo.
    const newValue = value.toFixed(2).replace('.',',')
    console.log(`R$ ${newValue}`)
}

DinheiroFormaCorreta(0.1 + 0.2)