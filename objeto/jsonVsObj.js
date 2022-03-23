//OBJETO PARA JSON
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
/**é passado para texto, mas a função soma é excluida porque json é formato de dados
 * e não é algo executado*/
console.log(JSON.stringify(obj))

//JSON PARA OBJETO
// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))//não é formato válido
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 2}"))//não é formato válido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 2}'))
console.log(JSON.parse('{"a": 1.8, "b": "string", "c": true, "d": {}, "e": []}'))