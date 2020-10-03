const assert = require('assert');
const { create } = require('domain');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {


    const newObject = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })
    assert.strictEqual(Object.keys(newObject)[0], 'fetchMenu');
    // --------------------------------------------------------------------------------------
    const objetoRetornado = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado.fetchMenu, { food: {}, drink: {}});
    // --------------------------------------------------------------------------------------
    const teste3 = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    const expected = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} };
    assert.deepStrictEqual(teste3.fetchMenu, expected);
    // --------------------------------------------------------------------------------------
    const teste4 = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}});
    assert.deepStrictEqual(teste4.consumption, []);

    // --------------------------------------------------------------------------------------
    const teste5 = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}});
    const order = teste5.order('coxinha');
    assert.deepStrictEqual(teste5.consumption, ['coxinha']);
    // --------------------------------------------------------------------------------------
    const teste6 = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}});
    teste6.order('coxinha');
    teste6.order('agua');
    teste6.order('sopa');
    teste6.order('sashimi');
    const expected6 = ["coxinha", "agua", "sopa", "sashimi"];
    assert.deepStrictEqual(teste6.consumption, expected6);
    // --------------------------------------------------------------------------------------
    const teste7 = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}});
    teste7.order('coxinha');
    teste7.order('agua');
    teste7.order('coxinha');
    const expected7 = ["coxinha", "agua", "coxinha"];
    assert.deepStrictEqual(teste7.consumption, expected7);
    // --------------------------------------------------------------------------------------
    const teste8 = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    teste8.order('coxinha');
    teste8.order('sopa');
    teste8.order('coxinha');
    const check = teste8.pay();
    assert.strictEqual(check, "19.47");
  });
});
// Referência de bibliográfica:
// https://github.com/tryber/sd-07-project-js-unit-tests/commit/68be2a9dc064c63fb8962c0dd1de10777f650877
