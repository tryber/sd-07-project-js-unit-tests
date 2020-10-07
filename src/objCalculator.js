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

const rounddown = val => Math.floor(val);

const add = (val1, val2) => {
  rounddown(val1);
  rounddown(val2);
  return val1 + val2;
};

const mult = (val1, val2) => {
  rounddown(val1);
  rounddown(val2);
  return val1 * val2;
};

const div = (val1, val2) => {
  rounddown(val1);
  rounddown(val2);
  let divresult = val1 / val2;
  divresult = Math.floor(divresult);
  return divresult;
};

const sub = (val1, val2) => {
  rounddown(val1);
  rounddown(val2);
  return val1 - val2;
};

const calculator = {
  add,
  mult,
  div,
  sub,
};

module.exports = calculator;
