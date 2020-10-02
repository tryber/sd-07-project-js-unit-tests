/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {};
calculator.add = (param, param2) => {
  let sum = 0;
  if (typeof (param) === 'number' && typeof (param2) === 'number') {
    sum = Math.floor(parseFloat(param + param2));
  }
  return sum;
};

calculator.div = (param, param2) => {
  let div;
  if (typeof (param) === 'number' && typeof (param2) === 'number') {
    div = Math.floor(parseFloat(param / param2));
  }
  return div;
};

calculator.mult = (param, param2) => {
  let mult;
  if (typeof (param) === 'number' && typeof (param2) === 'number') {
    mult = Math.floor(parseFloat(param * param2));
  }
  return mult;
};

calculator.sub = (param, param2) => {
  let sub;
  if (typeof (param) === 'number' && typeof (param2) === 'number') {
    sub = Math.floor(parseFloat(param - param2));
  }
  return sub;
};
module.exports = calculator;
