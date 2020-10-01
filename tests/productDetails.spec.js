const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('firstProduct', 'secondProduct').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('firstProduct', 'secondProduct') [0], 'object');
    assert.deepStrictEqual(typeof productDetails('firstProduct', 'secondProduct') [1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('firstProduct', 'secondProduct')[0], productDetails('firstProduct', 'secondProduct')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
