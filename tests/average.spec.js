/* eslint-disable max-len */

const assert = require('assert');
const average = require('../src/average');

/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#average', () => {
  it("tests function average's behaviour as specified", () => {
    assert.strictEqual(average([3, 4, 5]), 4);
    //teste se entrada [3, 4, 5] a soma da media é 4
    assert.strictEqual(average([1, 2, 3, '4', 5]), undefined);
    //teste se uma stringue for declarado no array retorna undefined
    assert.strictEqual(average([0, 0, 0, 0, 0, 0, 0]), 0);
    //teste se receber um array [0,0,0,0,0,0] a media e 0
    assert.strictEqual(average([1, 2, '3']), undefined);
    //teste se uma stringue for declarado no array retorna undefined
    assert.strictEqual(average([1, 2, 3]), 2);
    //teste se receber um array [1, 2, 3] media é 2
    assert.strictEqual(average([0, 0, 0, 0, 0, 0, 1]), 0);
//teste se receber um array [0,0,0,0,0,1] a media e 0
    assert.strictEqual(average([]), undefined);
    //teste se o array esta vazio retorna undefined
    assert.strictEqual(average([' ']), undefined);
    //teste se a entrada for uma strig vazia retona undefined
    assert.strictEqual(average(['um', 'dois', 'tres']), undefined);
    //teste se a entrada for string retorna undefined
    assert.strictEqual(average([47, 63, 122]), 77);

    assert.strictEqual(average([-11, 2, 5]), -1);

    assert.strictEqual(average([-11, -5, 2]), -5);
  });
});
