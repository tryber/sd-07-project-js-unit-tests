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

    //Referência: https://odesenvolvedor.com.br/verificando-o-tipo-de-um-elemento-no-javascript_1957.html
    //Se o tipo do objeto que estiver chegando por parâmetro tiver tamanho (length), significa que ele é um array, se não, é simplesmente um obejto. Se não tiver tamanho, é retornado o tipo dele (não será object ou array).

    function typeOf(obj) {
      if (typeof (obj) == "object") {
        if (obj.length) {
          return "array";
        } else {
          return "object";
        }
      } else {
        return typeof (obj);
      }
    }

    function numberOfObjects(object) {
      let counter = 0;
      for (let index = 0; index < object.length; index++) {
        if (typeof (object[index]) === 'object') {
          counter += 1;
        }
      }
      return counter;
    }

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeOf(productDetails('x', 'y')), 'array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('x', 'y').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(numberOfObjects(productDetails('x', 'y')), 2);
    //OU assert.strictEqual(typeof (Object.entries(productDetails('Alcool gel', 'Máscara'))),'object'); 
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.entries(productDetails("x","y")[0]),Object.entries(productDetails("x","y")[1]));
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
