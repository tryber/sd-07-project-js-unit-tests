/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { truncate } = require('fs');
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
    assert.strictEqual(Array.isArray(productDetails()), true); //O método Array.isArray() retorna true se um objeto é uma array, e false se não é.
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.values(productDetails()).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.keys(productDetails()), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('alcool', 'mascara')[0].name, productDetails('alcool', 'mascara')[1].name);
    // (Difícil) Teste que os dois productIds terminam com 123.
    productDetails('alcool', 'mascara').forEach(element => {
      const produtoId = element.details.productId;
      assert.deepStrictEqual(produtoId.slice(produtoId.length - 3), '123'); //slice() -> retorna um array com parte do array original (tamanho): retirado de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    });
  });
});
