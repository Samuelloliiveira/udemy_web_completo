function numerosImpares(inicio = 0, fim = 100) {
    const arrayInicioFim = [inicio, fim]

    if (inicio > fim) {
        arrayInicioFim.reverse()
    }

    //outra forma de fazer caso o inicio seja maior:

    // if (inicio > fim) {
    //     inicio = fim + inicio // inicio = 22
    //     fim = inicio - fim // fim = 19
    //     inicio = inicio - fim  //inicio volta a ser 3      
    // }

    for (let i = arrayInicioFim[0]; i <= arrayInicioFim[1]; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }

}

numerosImpares(19, 3)