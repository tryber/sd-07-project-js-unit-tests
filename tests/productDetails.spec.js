const assert = require('assert');
const productDetails = require('../src/productDetails');

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    assert.strictEqual(typeof productDetails('Alcool Gel', 'Mascara'), "object");
    
    assert.strictEqual(productDetails('Alcool Gel', 'Mascara').length, 2);
    
    assert.strictEqual(productDetails('Alcool Gel', 'Mascara')
    .every(product => typeof product === "object"), true);
    
    assert.notDeepStrictEqual(Object.entries(productDetails('a','b')[0], 
    Object.entries(productDetails('a','b')[1])), true);
    
    assert.strictEqual(productDetails('firstProduct', 'secondProduct')
    .every(product => product.details.productId.endsWith('123')), true);
  });
});
