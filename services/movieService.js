const MoviesModel = require('../models/movieModel');

const isNotString = (value) => typeof value !== 'string';
const isNotNumber = (value) => typeof value !== 'number';

const isValid = (title, directedBy, releaseYear) => {
  if ([title, directedBy].some(isNotString)) return false;
  if (isNotNumber(releaseYear)) return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  if (!isValid(title, directedBy, releaseYear)) return false;
  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return { id };
};

module.exports = { create };
