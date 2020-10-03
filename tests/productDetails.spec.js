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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.values(productDetails('Alcool gel', 'Máscara')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const array = productDetails('Alcool gel', 'Máscara');
    assert.ok(typeof array[0] === 'object' && typeof array[1] === 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Alcool gel', 'Máscara')[0], productDetails('Alcool gel', 'Máscara')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    // Teste feito consultando github do Rafael Guimarães
    // https://github.com/tryber/sd-07-project-js-unit-tests/blob/rafaelmguimaraes-js-unit-tests/tests/productDetails.spec.js
    const regEx = /123$/;
    assert.ok(regEx.test(array[0]['details']['productId']) && (regEx.test(array[1]['details']['productId'])));
  });
});
