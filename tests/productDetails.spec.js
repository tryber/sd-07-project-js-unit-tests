/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require("assert");
const productDetails = require("../src/productDetails");

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

describe("#productDetails", () => {
	it("tests the function has the correct behaviour", () => {
		// ESCREVA SEUS TESTES ABAIXO:
		// Teste que o retorno da função é um array.
		assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'),'object');
		// Teste que o array retornado pela função contém dois itens dentro.
		assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length,2);
		// Teste que os dois itens dentro do array retornado pela função são objetos.
		for (let index = 0;index<productDetails('manga','leite').length;index+=1){
       assert.deepStrictEqual(typeof productDetails('manga','leite')[index],'object');
    }
		// Teste que os dois objetos são diferentes entre si.
		function compareObjetcts(string1,string2) {
			if (
				productDetails(string1,string2)[0] !==
				productDetails(string1,string2)[1]
			) {
				return true;
			}
    }
    assert.deepStrictEqual(compareObjetcts('leite','manga'),true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    let arrayNumbers0 = productDetails(
      'leite',
      'manga'
    )[0].details.productId.split('');
    let getNumbers0 =
      arrayNumbers0[arrayNumbers0.length - 3] +
      arrayNumbers0[arrayNumbers0.length - 2] +
      arrayNumbers0[arrayNumbers0.length - 1];
      

    let arrayNumbers1 = productDetails(
      'banana',
      'laranja'
    )[1].details.productId.split('');
    let getNumbers1 =
      arrayNumbers1[arrayNumbers1.length - 3] +
      arrayNumbers1[arrayNumbers1.length - 2] +
      arrayNumbers1[arrayNumbers1.length - 1];

    function compareGetNumbers() {
      if (getNumbers0 === getNumbers1) {
        return true;
      }
    }
    assert.deepStrictEqual(true, compareGetNumbers());
	});
});
