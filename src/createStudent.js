/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
const retornaFrase = () => {
  let mensagem = '';
  mensagem = 'Eita pessoa boa!';
  return mensagem;
};

const createStudent = (nome) => {
  return {
    name: `${nome}`,
    feedback: retornaFrase(),
  }
};

const estudante = createStudent('Leandrão, o Lobo Solitário');
console.log(estudante.name);
console.log(estudante.feedback);
console.log(typeof estudante.feedback);
console.log(createStudent('Leonardo'));
module.exports = createStudent;
