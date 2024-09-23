import { Request, Response } from 'express';
import { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } from '../services/movieService';

export const getMovies = async (req: Request, res: Response) => {
  const movies = await getAllMovies();
  res.json(movies);
};

export const getMovie = async (req: Request, res: Response) => {
  const movie = await getMovieById(parseInt(req.params.id, 10));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  res.json(movie);
};

export const addMovie = async (req: Request, res: Response) => {
  const newMovie = await createMovie(req.body);
  res.status(201).json(newMovie);
};

export const editMovie = async (req: Request, res: Response) => {
  const updatedMovie = await updateMovie(parseInt(req.params.id, 10), req.body);
  if (!updatedMovie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  res.json(updatedMovie);
};

export const removeMovie = async (req: Request, res: Response) => {
  await deleteMovie(parseInt(req.params.id, 10));
  res.status(204).send();
};
