const a = 1
const b = 2
const c = 3

//criando objeto
const obj1 = { a: a, b: b, c: c }//Não é necessário esse tipo de duplicidade
const obj2 = { a, b, c }
console.log(obj1, obj2)


//objeto atráves do valor de variável
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//notação literal "nova"
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//função dentro de um objeto literal
const obj5 = {
    funcao1: function () {//forma "antiga"
        // ...
    },
    funcao2() { //forma "nova"do ecmascript
        // ...
    }
}

console.log(obj5)