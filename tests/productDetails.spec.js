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
    assert.deepStrictEqual(Array.isArray(productDetails('Arroz', 'Feijao')), true)
    assert.deepStrictEqual(productDetails('Arroz', 'Feijao').length, 2)
    assert.deepStrictEqual(typeof productDetails('Arroz', 'Feijao')[0], 'object')
    assert.deepStrictEqual(typeof productDetails('Arroz', 'Feijao')[1], 'object')
    assert.notDeepStrictEqual(productDetails('Arroz', 'Feijao')[0], productDetails('Arroz', 'Feijao')[1])
    const details1 = productDetails('Arroz', 'Feijao')[0].details.productId;
    const details2 = productDetails('Arroz', 'Feijao')[1].details.productId;
    const details1LastNumbers = details1.slice(details1.length - 3, details1.length);
    const details2LastNumbers = details2.slice(details2.length - 3, details2.length);
    assert.strictEqual(details1LastNumbers, details2LastNumbers);
  });
});
