const vqv = (nome, idade) => {
  if (!nome || !idade) { return undefined; }
  retorno = `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  return retorno;
};

module.exports = vqv;
