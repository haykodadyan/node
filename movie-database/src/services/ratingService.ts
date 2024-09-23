import pool from '../database/db';
import { Rating } from '../models/ratingModel';

export const getAllRatings = async (): Promise<Rating[]> => {
  const { rows } = await pool.query('SELECT * FROM Ratings');
  return rows;
};

export const getRatingById = async (id: number): Promise<Rating | null> => {
  const { rows } = await pool.query('SELECT * FROM Ratings WHERE RatingID = $1', [id]);
  return rows.length ? rows[0] : null;
};

export const createRating = async (rating: Rating): Promise<Rating> => {
  const { Score, MovieID } = rating;
  const { rows } = await pool.query(
    'INSERT INTO Ratings (Score, MovieID) VALUES ($1, $2) RETURNING *',
    [Score, MovieID]
  );
  return rows[0];
};

export const updateRating = async (id: number, rating: Rating): Promise<Rating | null> => {
  const { Score, MovieID } = rating;
  const { rows } = await pool.query(
    'UPDATE Ratings SET Score = $1, MovieID = $2 WHERE RatingID = $3 RETURNING *',
    [Score, MovieID, id]
  );
  return rows.length ? rows[0] : null;
};

export const deleteRating = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Ratings WHERE RatingID = $1', [id]);
};
