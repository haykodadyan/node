import { Request, Response } from 'express';
import { getAllGenres, getGenreById, createGenre, updateGenre, deleteGenre } from '../services/genreService';

export const getGenres = async (req: Request, res: Response) => {
  const genres = await getAllGenres();
  res.json(genres);
};

export const getGenre = async (req: Request, res: Response) => {
  const genre = await getGenreById(parseInt(req.params.id, 10));
  if (!genre) {
    return res.status(404).json({ message: 'Genre not found' });
  }
  res.json(genre);
};

export const addGenre = async (req: Request, res: Response) => {
  const newGenre = await createGenre(req.body);
  res.status(201).json(newGenre);
};

export const editGenre = async (req: Request, res: Response) => {
  const updatedGenre = await updateGenre(parseInt(req.params.id, 10), req.body);
  if (!updatedGenre) {
    return res.status(404).json({ message: 'Genre not found' });
  }
  res.json(updatedGenre);
};

export const removeGenre = async (req: Request, res: Response) => {
  await deleteGenre(parseInt(req.params.id, 10));
  res.status(204).send();
};
