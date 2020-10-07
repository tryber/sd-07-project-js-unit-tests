

const average = (array) => {
  const verificarArray = array.every(numero => typeof (numero) === 'number');
  if (verificarArray === false || array.length === 0) {
    return undefined;
  }
  const media = array.reduce((t, n) => n + t, 0) / array.length;
  return Math.round(media);
};

module.exports = average;
