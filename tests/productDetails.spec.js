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
    const expected = 'function';
    assert.strictEqual(typeof productDetails, expected);

    // Teste que o array retornado pela função contém dois itens dentro.
    const arr = productDetails('manga', 'tangerina');
    const lengthArray = arr.length;
    const totalItems = 2;
    assert.strictEqual(lengthArray, totalItems);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const object1 = arr[0];
    const object2 = arr[1];
    assert.strictEqual(typeof object1, typeof object2);

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(object1, object2);

    // (Difícil) Teste que os dois productIds terminam com 123.
    const productOne = 'bolo';
    const productTwo = 'manga';
    const object = productDetails(productOne, productTwo);
    const objectOne = object[0].details.productId;
    const objectTwo = object[1].details.productId;
    const productOneOnlyNumber = objectOne.replace(productOne,'');
    const productTwoOnlyNumber = objectTwo.replace(productTwo,'');
    assert.strictEqual(productOneOnlyNumber, productTwoOnlyNumber);
  });
});
