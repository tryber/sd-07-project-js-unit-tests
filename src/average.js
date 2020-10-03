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
  if (array.length === 0) {
    return undefined;
  }
  let sumArray = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'string') {
      return undefined;
    }
    sumArray += array[i];
  }
  const averageArray = Math.round(sumArray / array.length); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round#:~:text=A%20fun%C3%A7%C3%A3o%20Math.,para%20o%20inteiro%20mais%20proximo.
  return averageArray;
};
module.exports = average;
