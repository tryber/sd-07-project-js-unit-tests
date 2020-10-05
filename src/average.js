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

const average = (arr) => {
  if (arr.length == 0) {
    return undefined;
  }
  let arrSum = null;
  for (let index = 0;index < arr.length;index += 1) {
    if (typeof arr[index] !== 'number') {
      return undefined;
    }
    arrSum += arr[index];
  }
  const averageArr = Math.round(arrSum / arr.length);
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  //https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js#:~:text=You%20calculate%20an%20average%20by,var%20avg%20%3D%20total%20%2F%20grades.
  return averageArr;
};

module.exports = average;

