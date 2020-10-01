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
    const product = productDetails('Alcool gel', 'Máscara');
    const productId0 = Object.values(product[0].details)[0];
    const productId1 = Object.values(product[1].details)[0];
    assert.strictEqual(typeof product, 'object');
    assert.strictEqual(product.length, 2);
    assert.strictEqual(typeof product[0], 'object');
    assert.strictEqual(typeof product[1], 'object');
    assert.notStrictEqual(product[0], product[1]);
    assert.deepStrictEqual(productId0.substr(-3), "123")
    assert.deepStrictEqual(productId1.substr(-3), "123")
  });
});
