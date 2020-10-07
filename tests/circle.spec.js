const assert = require('assert');
const circle = require('../src/circle');

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    
    assert.strictEqual(typeof circle(4), "object");
    assert.strictEqual(Object.keys(circle(2)).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.strictEqual(circle(2).circumference, 12.56);
    assert.strictEqual(parseFloat(circle(3).area.toPrecision(2)), 28);
    assert.deepStrictEqual(circle(3), { radius: 3, area: 28.259999999999998, circumference: 18.84 });
  });
});
