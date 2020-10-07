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
    const produtos = productDetails('Refrigerante', 'Guardanapo');
    let terminacao = false;
    if (produtos[0].details.productId.endsWith('123') && produtos[1].details.productId.endsWith('123')) {
      terminacao = true;
    }
    
    // ESCREVA SEUS TESTES ABAIXO:
    assert.notDeepStrictEqual(typeof produtos, 'Array');
    assert.strictEqual(produtos.length, 2);
    assert.strictEqual(typeof produtos[0], 'object');
    assert.notStrictEqual(produtos[0], produtos[1]);
    assert.strictEqual(terminacao, true);
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
