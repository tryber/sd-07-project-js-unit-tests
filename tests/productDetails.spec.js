const { strictEqual } = require('assert');
/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { type } = require('os');
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
    assert.strictEqual(typeof productDetails("Agua", "Mineral"), "object");
    assert.strictEqual(productDetails().length, 2);
    assert.strictEqual(typeof productDetails[1],typeof productDetails[2]);
    assert.notDeepStrictEqual(productDetails("Agua", "Mineral")[1], productDetails("Agua", "Mineral")[2]);
    assert.strictEqual(productDetails("Agua", "Mineral")[0].details.productId.replace("Agua",""), productDetails("Agua", "Mineral")[1].details.productId.replace("Mineral",""));
  });
});
