/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  const verifyNumbers = array.every(numero => typeof (numero) === 'number');
  if (verifyNumbers === false || array.length === 0) {
    return undefined;
  }
  const averageMath = array.reduce((n1, n2) => n2 + n1, 0) / array.length;
  return Math.round(averageMath);
};

module.exports = average;

/* Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
https://www.youtube.com/watch?v=g1C40tDP0Bk
*/
