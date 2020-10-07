const verifyTypeElement = array => array.some(element =>
typeof element !== 'number');

function result(array) {
  let total = 0;
  const anyNan = verifyTypeElement(array);
  if (anyNan) {
    return undefined;
  }
  array.forEach((element) => {
    total += element;
  });
  return Math.round(total / array.length);
}

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  return result(array);
};

module.exports = average;

