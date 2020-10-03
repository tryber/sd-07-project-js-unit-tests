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
    assert.deepStrictEqual(typeof productDetails('cerveja', 'carne'), 'object')
    const obj = Object.values(productDetails('item1', 'item2'));

    assert.strictEqual(Object.keys(productDetails('item1', 'item2')).length, 2);    
    assert.deepStrictEqual(typeof obj[0], 'object');
    assert.deepStrictEqual(typeof obj[1], 'object');    
    assert.notDeepStrictEqual(obj[0], obj[1]);
    assert.notStrictEqual(obj[0].details.productId.indexOf('123'), -1);
    assert.notStrictEqual(obj[1].details.productId.indexOf('123'), -1);    
  });
});
