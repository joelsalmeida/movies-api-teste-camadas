const { expect } = require('chai');
const sinon = require('sinon');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no Banco de Dados', () => {
  describe('Quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('Retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('O boolean deve ser "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('Quando inserido com sucesso', () => {
    before(() => {
      const ID_RETURNED = 1;

      sinon.stub(MoviesModel, 'create').resolves({ id: ID_RETURNED });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    const payloadMovie = {
      title: 'Interstellar',
      directedBy: 'Christopher Nolan',
      releaseYear: 2014,
    };

    it('Retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('O objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
