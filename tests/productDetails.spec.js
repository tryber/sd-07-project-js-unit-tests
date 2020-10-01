/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual( Array.isArray(productDetails()),  true);//  Array.isArray retorna true se a função retornar um array
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.values(productDetails()).length,2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.values(productDetails()), 'object');

    // Teste que os dois objetos são diferentes entre si.
    //Se dois objetos, e seus objetos filhos, forem iguais (em valores e tipos), um erro é lançado e o programa é encerrado:
    //ou seja , se eles forem diferetnes está correto
    assert.notDeepStrictEqual(Object.values(productDetails("a","b")) , Object.values(productDetails("b","a"))) //testa os obejtos filhos , vai testar a e b , e verificar se são iguais
    // (Difícil) Teste que os dois productIds terminam com 123.
    objeto2 = (productDetails("firstProduct","secondProduct"))
    const getNumberOfS = (objeto2) => {
      let total = [];
      let numeros = []
      const array = Object.keys(objeto2);//os dois objetos tem 2 chaves
      for (i in array) {
          total.push((objeto2[array[i]]["details"]))// percorre as chacves dos dois objetos e me retorna a chave escolhida
      }
      for(let j of total){
        numeros.push(j["productId"])
      }
      let fim = []
      for(let indice = 0 ; indice < numeros.length ; indice += 1){
         //numeros[indice].slice([numeros[indice].length - 3],numeros[indice].length)
         fim.push( numeros[indice].slice([numeros[indice].length - 3],numeros[indice].length))
           
      }  
    return fim 
    };
    assert.ok((getNumberOfS(productDetails("firstProduct","secondProduct"))),['123', '123']); // modo ok vai testar se a função é verdadeira ou nao 
  });
});
