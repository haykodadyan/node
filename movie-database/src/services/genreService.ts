import pool from '../database/db';
import { Genre } from '../models/genreModel';

export const getAllGenres = async (): Promise<Genre[]> => {
  const { rows } = await pool.query('SELECT * FROM Genres');
  return rows;
};

export const getGenreById = async (id: number): Promise<Genre | null> => {
  const { rows } = await pool.query('SELECT * FROM Genres WHERE GenreID = $1', [id]);
  return rows.length ? rows[0] : null;
};

export const createGenre = async (genre: Genre): Promise<Genre> => {
  const { GenreName } = genre;
  const { rows } = await pool.query(
    'INSERT INTO Genres (GenreName) VALUES ($1) RETURNING *',
    [GenreName]
  );
  return rows[0];
};

export const updateGenre = async (id: number, genre: Genre): Promise<Genre | null> => {
  const { GenreName } = genre;
  const { rows } = await pool.query(
    'UPDATE Genres SET GenreName = $1 WHERE GenreID = $2 RETURNING *',
    [GenreName, id]
  );
  return rows.length ? rows[0] : null;
};

export const deleteGenre = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Genres WHERE GenreID = $1', [id]);
};
