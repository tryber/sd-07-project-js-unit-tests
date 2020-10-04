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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (productDetails('Alcool gel', 'Máscara')), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const productAll = productDetails('Alcool gel', 'Máscara');
    for (let index = 0; index < productAll.length; index += 1) {
      assert.strictEqual(typeof (productAll[index]), 'object');
    }
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(Object.is(productAll[0], productAll[1]), false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let productIdA = productAll[0].details.productId;
    productIdA = productIdA.substring(productIdA.length - 3);
    let productIdB = productAll[1].details.productId;
    productIdB = productIdB.substring(productIdB.length - 3);
    assert.strictEqual(productIdA, productIdB);
  });
});
