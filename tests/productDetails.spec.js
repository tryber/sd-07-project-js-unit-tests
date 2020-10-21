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
    assert.deepStrictEqual(
      typeof productDetails('banana', 'laranja'),
      'object'
    );
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('banana', 'laranja').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (let i = 0; i < productDetails('banana', 'laranja').length; i += 1) {
      assert.deepStrictEqual(
        typeof productDetails('banana', 'laranja')[i],
        'object'
      );
    }
    // Teste que os dois objetos são diferentes entre si.
    function compareObjects() {
      if (
        productDetails('banana', 'laranja')[0] !==
        productDetails('banana', 'laranja')[1]
      ) {
        return true;
      }
    }
    assert.deepStrictEqual(true, compareObjects());
    // (Difícil) Teste que os dois productIds terminam com 123.

    const lastNumbers0 = productDetails('banana', 'laranja')[0].details.productId.endsWith('123');

    const lastNumbers1 = productDetails('banana', 'laranja')[1].details.productId.endsWith('123');

    function compareLastNumbers() {
      if (lastNumbers0 === lastNumbers1) {
        return true;
      }
    }
    assert.deepStrictEqual(true, compareLastNumbers());
  });
});
