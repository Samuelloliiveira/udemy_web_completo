function tratarErrorELancar(erro) {
    throw new Error('Aconteceu um erro...')
    // throw 10
    // throw true
    // throw 'mensagem'
    // throw {
    //     nome: erro.name,
    //     msg: erro.message,
    //     date: new Date
    // }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        // bloco que é executado havendo erro ou não
        console.log('final')
    }
}

const obj = { nome: 'Samuel'}
imprimirNomeGritando(obj)