/**Em JS classe é só uma forma diferente de escrever uma função, por baixo dos "panos"
 * tudo é uma função, e a herança é sempre por prototype*/

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //super faz referência ao atributo do objeto Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

//instanciando a classe filho
const filho = new Filho
console.log(filho)