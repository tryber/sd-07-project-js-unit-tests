/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];
// console.log(productDetails('banana', 'laranja'));
// console.log(productDetails('banana', 'laranja').length);
// console.log(typeof productDetails('banana', 'laranja'));
// console.log(productDetails('banana', 'laranja')[0]);

let arrayLastNumbers0 = productDetails('banana', 'laranja')[0].details.productId.split('');
let sumLastNumbers0 = arrayLastNumbers0[arrayLastNumbers0.length -3] + arrayLastNumbers0[arrayLastNumbers0.length -2] + arrayLastNumbers0[arrayLastNumbers0.length -1];

console.log(arrayLastNumbers0);
console.log(sumLastNumbers0);

let arrayLastNumbers1 = productDetails('banana', 'laranja')[1].details.productId.split('');
let sumLastNumbers1 = arrayLastNumbers1[arrayLastNumbers1.length -3] + arrayLastNumbers1[arrayLastNumbers1.length -2] + arrayLastNumbers1[arrayLastNumbers1.length -1];

console.log(arrayLastNumbers1);
console.log(sumLastNumbers1);

module.exports = productDetails;
