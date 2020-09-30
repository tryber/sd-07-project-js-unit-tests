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
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productDetails('Petra', 'DeBron')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Petra', 'DeBron').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('Heineken', 'Colorado')[0], 'object');
    assert.deepStrictEqual(typeof productDetails('Heineken', 'Colorado')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Heineken', 'Colorado')[0], productDetails('Heineken', 'Colorado')[1])
    // (Difícil) Teste que os dois productIds terminam com 123.
    const item1 = productDetails('Heineken', 'Colorado')[0].details.productId;
    const item2 = productDetails('Heineken', 'Colorado')[1].details.productId;
    assert.deepStrictEqual(item1.endsWith('123'), true);
    assert.deepStrictEqual(item2.endsWith('123'), true);
  });
});
