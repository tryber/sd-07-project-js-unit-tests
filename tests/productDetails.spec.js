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
    const output = productDetails('Macara', 'carro');
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(output), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(output.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof output[0], 'object')
    assert.deepStrictEqual(typeof output[1], 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual( output[0] === output[1] ? true:false, false)
    // (Difícil) Teste que os dois productIds terminam com 123.
    const product1 = output[0]['details']['productId'];
    const product2 = output[1]['details']['productId'];
    const result1 = product1.length - product1.indexOf('123');
    const result2 = product2.length - product2.indexOf('123');
    assert.strictEqual(result1, 3);
    assert.strictEqual(result2, 3);
  });
});
