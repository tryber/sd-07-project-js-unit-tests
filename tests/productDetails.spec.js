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
    assert.strictEqual(typeof productDetails(), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    const productArray = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Object.keys(productArray).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.values(productArray), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.values(productArray)[0], Object.values(productArray)[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const productIdEnds = (array) => {
      let counter = 0;
      for (let i = 0; i < array.length; i += 1) {
        let productId = Object.values(array)[i].details.productId;
        if (productId.endsWith('123')) {
          counter++;
        }
      }
      return counter;
    };

    assert.strictEqual(productIdEnds(productArray), 2);
  });
});
