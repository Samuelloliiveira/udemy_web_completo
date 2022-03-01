// IIFE - Immediately Invoked Function Expression

//tudo que esta dentro dessa função foge do escopo global
(function() { 
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()