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
    assert.strictEqual(typeof productDetails('Alcool', 'Mascará'), 'object');
    assert.deepStrictEqual(productDetails('alcool', 'mascará').length, 2);
    assert.deepStrictEqual(typeof Object.keys(productDetails('alcool', 'mascará')), 'object');
    assert.notDeepStrictEqual(productDetails('alcool', 'mascará')[0].name, productDetails('alcool', 'mascará')[1].name);
    //https://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string
    for (let index = 0; index < productDetails('alcool', 'mascará').length; index += 1) {
      let productIdPath = productDetails('alcool', 'mascará')[index].details.productId;
      assert.deepStrictEqual(productIdPath.slice(productIdPath.length - 3), '123');
    }
  });
});
