/** OO - O paradigma da Programação orientada a objeto tem como finalidade
 * deixar mais próximo da vida real
 */

//CÓDIGO NÃO EXECUTÁVEL

// Procedural - antes da OO
processamento(valor1, valor2, valor3)

// OO
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}

objeto.processamento()//processamento pertence ao objeto que contém os valores

/** 
 * Objetos tem atributos e comportamentos e se relacionam entre se
 * Um objeto pode conter outros objetos
 * Pode ter parentesco - herança ( Objeto filho que herda características de um objeto pai)
*/

/** PRINCIPIOS IMPORTANTES: 
 * 
 * Abstração - é a forma de "pegar" um objeto da vida real e traduzir para o sistema
 * 
 * Encapsulamento - Restrição ao acesso direto a alguns dos componentes de um objeto
 * 
 * Herança - permite que classes compartilhem atributos e métodos. Recebemos 
 * características e atributos da classe pai/mãe (em algumas linguagens é permitido ter
 * mais de uma classe pai(herança multipla), mas no JS é permitido apenas uma classe pai).
 * Um classe pai pode herdar de outra classe que também é pai (uma cadeia de protótipos)
 * 
 * Polimorfismo - permite que referências de tipos de classes mais abstratas representem 
 * o comportamento das classes concretas que referenciam
*/