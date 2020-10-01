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
    let received = Array.isArray(productDetails('Álcool Gel', 'Máscara'));
    let expected = true;
    assert.strictEqual(received, expected);
    // Teste que o array retornado pela função contém dois itens dentro.
    received = Object.keys(productDetails('Álcool Gel', 'Máscara')).length;
    expected = 2;
    assert.strictEqual(received, expected);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    array = productDetails('Álcool Gel', 'Máscara');
    received = array.every(element => !Array.isArray(element) && typeof element === 'object' && element !== null);
    expected = true;
    assert.strictEqual(received, expected);
    // Teste que os dois objetos são diferentes entre si.
    array = productDetails('Álcool Gel', 'Máscara');
    received = array[0];
    expected = array[1];
    assert.notDeepStrictEqual(received, expected);
    // (Difícil) Teste que os dois productIds terminam com 123.
    array = productDetails('Álcool Gel', 'Máscara');
    received = array[0].details.productId.slice(-3) === '123';
    expected = true;
    assert.strictEqual(received, expected);
  });
});
