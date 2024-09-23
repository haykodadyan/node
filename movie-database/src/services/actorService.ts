import pool from '../database/db';
import { Actor } from '../models/actorModel';

export const getAllActors = async (): Promise<Actor[]> => {
  const { rows } = await pool.query('SELECT * FROM Actors');
  return rows;
};

export const getActorById = async (id: number): Promise<Actor | null> => {
  const { rows } = await pool.query('SELECT * FROM Actors WHERE ActorID = $1', [id]);
  return rows.length ? rows[0] : null;
};

export const createActor = async (actor: Actor): Promise<Actor> => {
  const { Name, Nationality, DOB } = actor;
  const { rows } = await pool.query(
    'INSERT INTO Actors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *',
    [Name, Nationality, DOB]
  );
  return rows[0];
};

export const updateActor = async (id: number, actor: Actor): Promise<Actor | null> => {
  const { Name, Nationality, DOB } = actor;
  const { rows } = await pool.query(
    'UPDATE Actors SET Name = $1, Nationality = $2, DOB = $3 WHERE ActorID = $4 RETURNING *',
    [Name, Nationality, DOB, id]
  );
  return rows.length ? rows[0] : null;
};

export const deleteActor = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM Actors WHERE ActorID = $1', [id]);
};
