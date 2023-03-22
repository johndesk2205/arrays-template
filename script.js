// // Vamos criar alguns arrays, e refletir a respeito deles:
// // Crie um array com 3 itens do tipo String
// // Crie um array com 3 itens do tipo Number
// // Crie um array com uma String, um número e um booleano;
// // Crie um array com apenas um valor. Um número.
// // Crie um array sem nenhum valor dentro.


// // Crie um array com 3 itens do tipo String
// const arrayStrings = ["João", "Mesa", "cadeira"]

// console.log("Array com strings: ", arrayStrings)

// // Crie um array com 3 itens do tipo Number
// const arrayNumbers = [10, 3, 29]

// console.log("Array com números: ", arrayNumbers)

// // Crie um array com uma String, um número e um booleano;
// const arrayValueDif = ["bom dia", 78, true]

// console.log("Array com valores diferentes", arrayValueDif)

// // Crie um array com apenas um valor. Um número.
// const array1Value = [234]

// console.log("Array com um valor: ", array1Value)

// // Crie um array sem nenhum valor dentro.
// const arrayNoValue = []

// console.log("Array sem valor: ", arrayNoValue)

// // Vamos tentar acessar índices específicos dos arrays construídos anteriormente:
// // Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
// // Verifique se o terceiro array inclui cada um dos itens;
// // No quarto array, imprima o valor do único item. 
// // Observe qual o seu índice, e imprima seu tamanho.


// // Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
// console.log(arrayStrings.length)
// //retorna undefined pois não existe esse índice
// console.log(arrayStrings[3])

// // Verifique se o terceiro array inclui cada um dos itens;
// console.log(arrayValueDif)

// // No quarto array, imprima o valor do único item.
// console.log(array1Value[0])
// console.log(array1Value.length)


// // Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
// // Faça push() de uma nova string no array copiado
// // Imprima os dois arrays. Há diferença?
// // Como podemos resolver isso?
// // Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
// // Imprima novamente ambos os arrays


// // Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
// //const arrayCopia = arrayStrings

// // Faça push() de uma nova string no array copiado
// //arrayCopia.push("pedro")

// // Imprima os dois arrays. Há diferença?
// //console.log(arrayStrings)
// //console.log(arrayCopia)  //Copiou a string para os dois arrays

// // Como podemos resolver isso?

// const arrayCopia = arrayStrings.slice()

// arrayCopia.push("pedro")

// //console.log(arrayStrings)

// // Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
// arrayCopia.splice(2,2)

// // Imprima novamente ambos os arrays
// console.log(arrayStrings)

// console.log(arrayCopia)


//EXERCICIO DE FIXAÇÃO

const array = [3, 87, 34, 56, 79]

const copiaArray = array.slice()

copiaArray.pop()

copiaArray.push(6)

copiaArray.splice(2,1)

console.log(array)
console.log(copiaArray)





















