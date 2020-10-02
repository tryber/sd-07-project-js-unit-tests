/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { type } = require('os');
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
    assert.strictEqual(Array.isArray(productDetails('Celular', 'Controle')), true);  // Teste que o retorno da função é um array. (Fonte: Oliva deu a dica no Slack, https://stackoverflow.com/questions/4775722/how-to-check-if-an-object-is-an-array)
    assert.strictEqual(productDetails('Celular', 'Controle').length, 2);             // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(typeof productDetails('Celular', 'Controle')[0,1], 'object')  // Teste que os dois itens dentro do array retornado pela função são objetos.   

    const comparaObjetos = () => {
      const produto1 = productDetails('Celular', 'Controle')[0];
      const produto2 = productDetails('Celular', 'Controle')[1];
      if (produto1 != produto2) {
        return true;
      }
    }
    assert.strictEqual(comparaObjetos(), true); // Teste que os dois objetos são diferentes entre si.

    const verifyProductIdEnding = () => {
      if (productDetails('Celular', 'Controle')[0].details.productId.substr(-3) != 123) { // Colega Vladimir Chagas deu a dica do substr no Slack https://trybecourse.slack.com/archives/C017W4EDD4K/p1601576748042600
        return false
      };
      if (productDetails('Celular', 'Controle')[1].details.productId.substr(-3) != 123) {
        return false
      };
      return true;
    }

    assert.strictEqual(verifyProductIdEnding(), true);  // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
