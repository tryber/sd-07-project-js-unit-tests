const createStudent = (name) => {
  const estudante = {
    name,
    feedback: () => 'Eita pessoa boa!',
  };
  return estudante;
};

module.exports = createStudent;
