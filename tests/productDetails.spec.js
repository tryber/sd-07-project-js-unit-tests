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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const result = productDetails('um', 'dois');

    assert.strictEqual(Array.isArray(result), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(result.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual([typeof(result[0]), typeof(result[1])], ['object', 'object']);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(result[0], result[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const obj1 = result[0].details.productId.slice(-3);
    const obj2 = result[0].details.productId.slice(-3);
    assert.deepStrictEqual([obj1, obj2], ['123', '123']);
  });
});
