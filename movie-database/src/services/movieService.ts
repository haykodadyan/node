
import pool from '../database/db';
import { Movie } from '../models/movieModel';

export const getAllMovies = async (): Promise<Movie[]> => {
  const { rows } = await pool.query('SELECT * FROM Movies');
  return rows;
};

export const getMovieById = async (id: number): Promise<Movie | null> => {
  const { rows } = await pool.query('SELECT * FROM Movies WHERE MovieID = $1', [id]);
  return rows.length ? rows[0] : null;
};

export const createMovie = async (movie: Movie): Promise<Movie> => {
  const { Title, ReleaseYear, DirectorID } = movie;
  const { rows } = await pool.query(
    'INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES ($1, $2, $3) RETURNING *',
    [Title, ReleaseYear, DirectorID]
  );
  return rows[0];
};

export const updateMovie = async (id: number, movie: Movie): Promise<Movie | null> => {
  const { Title, ReleaseYear, DirectorID } = movie;
  const { rows } = await pool.query(
    'UPDATE Movies SET Title = $1, ReleaseYear = $2, DirectorID = $3 WHERE MovieID = $4 RETURNING *',
    [Title, ReleaseYear, DirectorID, id]
  );
  return rows.length ? rows[0] : null;
};

export const deleteMovie = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Movies WHERE MovieID = $1', [id]);
};
