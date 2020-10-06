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
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object', "não é um array");
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(Object.entries(productDetails('Alcool gel', 'Máscara')).length, 2, "não tem dois itens");
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara')[0], 'object', "os itens não são objetos");
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara')[0] === productDetails('Alcool gel', 'Máscara')[1], false, "os itens não são iguais");
    // (Difícil) Teste que os dois productIds terminam com 123.
    const lasttest = productDetails('Alcool gel', 'Máscara');
    const equatest = lasttest[0].details.productId.slice(-3) === lasttest[1].details.productId.slice(-3);
    let totest = undefined;
    if (equatest === true && lasttest[0].details.productId.slice(-3) === "123") {
    totest = true;
    }
    assert.deepStrictEqual(totest, true, "não terminam com 123");
  });
});
