const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no Banco de Dados', () => {
  before(async () => {
    const executeReturn = [{ insertId: 1 }];
    sinon.stub(connection, 'execute').resolves(executeReturn);
  });

  after(async () => {
    connection.execute.restore();
  });

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
