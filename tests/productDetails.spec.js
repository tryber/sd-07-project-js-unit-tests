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
    assert.deepStrictEqual(typeof(productDetails('Alcool gel', 'Máscara')) === 'object', true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(Object.keys(productDetails('a','b')).length === 2, true);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof(Object.values(productDetails('a','b'))[0]) === 'object', true);
    assert.deepStrictEqual(typeof(Object.values(productDetails('a','b'))[1]) === 'object', true);

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.values(productDetails('a','b'))[0], typeof(Object.values(productDetails('a','b'))[1]), 'these two objects are NOT the same');

    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(((Object.values(productDetails('a', 'b')[0].details.productId)).join('').substr(-3)) === '123' && ((Object.values(productDetails('a', 'b')[1].details.productId)).join('').substr(-3)) === '123', true, 'both productIds should end with "123"');
  });
});
