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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    let result = productDetails();
    let expected = 2;
    assert.strictEqual(result.length, expected);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof result[0], 'object');
    assert.strictEqual(typeof result[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    result = productDetails('Alcool', 'Alcool em Gel');
    assert.notDeepStrictEqual(result[0], result[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let firstFinalProduct = result[0].details.productId;
    let secondFinalProduct = result[1].details.productId;
    assert(firstFinalProduct.endsWith('123'));
    assert(secondFinalProduct.endsWith('123'));
  });
});
