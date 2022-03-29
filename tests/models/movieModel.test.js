const { expect } = require('chai');

const MoviesModel = {
  create: () => {},
};

describe('Insere um novo filme no Banco de Dados', () => {
  const newMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  describe('Quando é inserido com sucesso', () => {
    it('Retorna um objeto', async () => {
      const response = await MoviesModel.create(newMovie);

      expect(response).to.be.a('object');
    });

    it('O objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(newMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
