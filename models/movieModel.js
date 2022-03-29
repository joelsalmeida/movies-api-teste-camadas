const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const query =
    'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)';
  const [movie] = await connection.execute(query, [title, directedBy, releaseYear]);

  return { id: movie.insertId };
};

module.exports = { create };
