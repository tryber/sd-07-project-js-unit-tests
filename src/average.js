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
const values = (arr) => {
  let isNumber = Boolean;
  arr.forEach((element) => {
    if (typeof (element) !== 'number') {
      isNumber = false;
    }
  });
  return isNumber;
};

const calcAverage = (arr) => {
  let sum = 0;
  for (numbers = 0; numbers < arr.length; numbers += 1) {
    sum += arr[numbers];
  }
  calcResult = sum / arr.length;
  return Math.round(calcResult);
};

const average = (arr) => {
  let result;
  let isNumber = false;
  if (arr.length > 0) {
    isNumber = values(arr);
  }
  if (isNumber === false) {
    result = undefined;
  } else {
    result = calcAverage(arr);
  }
  return result;
};

average([]);
module.exports = average;
