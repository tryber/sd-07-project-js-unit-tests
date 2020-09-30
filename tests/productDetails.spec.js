/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { stringify } = require('querystring');
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
    assert.strictEqual(typeof productDetails('Álcool', 'Gel'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Álcool', 'Gel').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Álcool', 'Gel')[0], 'object')
    assert.strictEqual(typeof productDetails('Álcool', 'Gel')[1], 'object')
    // Teste que os dois objetos são diferentes entre si.
    const object1 = productDetails('Álcool', 'Gel')[0];
    const object2 = productDetails('Álcool', 'Gel')[1];
    assert.deepStrictEqual(object1 !== object2, true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const productId1 = object1.details.productId.substr(-1, 3);
    const productId2 = object2.details.productId.substr(-1, 3);
    assert.deepStrictEqual(productId1 === productId2, true);
  });
});
