const { strictEqual } = require('assert');
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
    assert.strictEqual(typeof productDetails(['firstProduct', 'secondProduct']), 'object');
    assert.strictEqual (productDetails(['firstProduct', 'secondProduct']).length, 2);
    assert.strictEqual(typeof(Object.values(productDetails('firstProduct', 'secondProduct'))), 'object');
    assert.notStrictEqual(Object.keys(productDetails('firstProduct', 'secondProduct')), true);
    assert.strictEqual(productDetails('firstProduct', 'secondProduct')[0].details.productId.endsWith('123') && productDetails('firstProduct', 'secondProduct')[1].details.productId.endsWith('123'), true);
  });
});
// source para última questao: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
