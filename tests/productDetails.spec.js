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
    assert.strictEqual(
      typeof productDetails('Alcool gel', 'Máscara'),
      'object'
    );
    // Teste que o array retornado pela função contém dois itens dentro.
    let array = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(array.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    let output1;
    if (typeof array[0] === 'object' && typeof array[1] === 'object') {
      output1 = true;
    }
    assert.strictEqual(output1, true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(array[1], array[2]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const id1 = array[0].details.productId;
    const id2 = array[1].details.productId;
    let string1 = '';
    let string2 = '';
    let output2;
    for (let i = id1.length - 3; i < id1.length; i += 1) {
      string1 = `${string1}${id1[i]}`;
    }
    for (let i = id2.length - 3; i < id2.length; i += 1) {
      string2 = `${string2}${id2[i]}`;
    }
    if (string1 === '123' && string2 === '123') {
      output2 = true;
    }
    assert.deepStrictEqual(output2, true);
  });
});
