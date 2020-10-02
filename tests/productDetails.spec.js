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
    assert.deepStrictEqual(typeof productDetails(), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails()).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(productDetails(), Object.values(productDetails()));
    // Teste que os dois objetos são diferentes entre si.
    let firstProductId1 = Object.values(productDetails('car','motorcycle')[0].details.productId);
    let secondProductId2 = Object.values(productDetails('car','motorcycle')[1].details.productId);
    assert.notDeepStrictEqual(firstProductId1, secondProductId2);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let firstProductId = (Object.values(productDetails('car', 'motorcycle')[0].details.productId)).toString();
    let secondProductId = Object.values(productDetails('arroz', 'feijao')[1].details.productId).toString();
    // firstProductId = firstProductId.reverse();
    // secondProductId = secondProductId.reverse();
    // assert.strictEqual(firstProductId[0] === secondProductId[0] && firstProductId[1] === secondProductId[1] && firstProductId[2] === secondProductId[2], true);
    //https://www.w3schools.com/jsref/jsref_endswith.asp
    assert.strictEqual(firstProductId.endsWith('1,2,3') && secondProductId.endsWith('1,2,3'), true);
  });
});
