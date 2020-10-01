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
    assert.strictEqual(typeof(productDetails().length), 'number');
    assert.strictEqual(productDetails().length, 2)
    assert.deepStrictEqual([typeof (productDetails()[0]),typeof (productDetails()[1])], ['object','object'])
    assert.strictEqual((productDetails('Alcool gel', 'Máscara')[0] != productDetails('Alcool gel', 'Máscara')[1]), true)
    assert.strictEqual((productDetails()[0].details.productId.slice (productDetails()[0].details.productId.length -3,productDetails()[0].details.productId.length) === '123' && productDetails()[0].details.productId.slice (productDetails()[1].details.productId.length -3,productDetails()[1].details.productId.length) === '123'), true)
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
