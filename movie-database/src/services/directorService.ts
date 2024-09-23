import pool from "../database/db";
import { Director } from "../models/directorModel";

export const getAllDirectors = async (): Promise<Director[]> => {
  const { rows } = await pool.query('SELECT * FROM Directors');
  return rows;
};

export const getDirectorById = async (id: number): Promise<Director | null> => {
  const { rows } = await pool.query('SELECT * FROM Directors WHERE DirectorID = $1', [id]);
  return rows.length ? rows[0] : null;
};

export const createDirector = async (director: Director): Promise<Director> => {
  const { Name, Nationality, DOB } = director;
  const { rows } = await pool.query(
    'INSERT INTO Directors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *',
    [Name, Nationality, DOB]
  );
  return rows[0];
};

export const updateDirector = async (id: number, director: Director): Promise<Director | null> => {
  const { Name, Nationality, DOB } = director;
  const { rows } = await pool.query(
    'UPDATE Directors SET Name = $1, Nationality = $2, DOB = $3 WHERE DirectorID = $4 RETURNING *',
    [Name, Nationality, DOB, id]
  );
  return rows.length ? rows[0] : null;
};

export const deleteDirector = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Directors WHERE DirectorID = $1', [id]);
};