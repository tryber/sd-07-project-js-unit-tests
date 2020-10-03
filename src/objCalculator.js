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

const calculator = {
  add: (first, second) => {
    const result = parseInt(first + second, 10);
    return result;
  },
  mult: (thisrd, fourth) => {
    const result = parseInt(thisrd * fourth, 10);
    return result;
  },
  div: (fiveth, sixth) => {
    const result = parseInt(fiveth / sixth, 10);
    return result;
  },
  sub: (seventh, eighth) => {
    const result = parseInt(seventh - eighth, 10);
    return result;
  },

};

module.exports = calculator;
