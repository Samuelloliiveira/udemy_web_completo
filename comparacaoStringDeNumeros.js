const cadeia_de_strings = '1, 2, 3, 4, 5, 6, 7, 8, 9'

console.log('1' > '2') //false
console.log('1' > '1') //false
console.log('2' > '1') //true
console.log('4' > '2') //true


/**Agora se compararmos os valores a partir do 9,
 * a comparação irá validar o primeiro número da cadeia
 * numeral
 */

console.log('2' > '12') //true
console.log('5' > '42') //true
console.log('3' > '29') //true

//Não é uma abordagem boa comparar números em formato string