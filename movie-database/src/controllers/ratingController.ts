import { Request, Response } from 'express';
import { getAllRatings, getRatingById, createRating, updateRating, deleteRating } from '../services/ratingService';

export const getRatings = async (req: Request, res: Response) => {
  const ratings = await getAllRatings();
  res.json(ratings);
};

export const getRating = async (req: Request, res: Response) => {
  const rating = await getRatingById(parseInt(req.params.id, 10));
  if (!rating) {
    return res.status(404).json({ message: 'Rating not found' });
  }
  res.json(rating);
};

export const addRating = async (req: Request, res: Response) => {
  const newRating = await createRating(req.body);
  res.status(201).json(newRating);
};

export const editRating = async (req: Request, res: Response) => {
  const updatedRating = await updateRating(parseInt(req.params.id, 10), req.body);
  if (!updatedRating) {
    return res.status(404).json({ message: 'Rating not found' });
  }
  res.json(updatedRating);
};

export const removeRating = async (req: Request, res: Response) => {
  await deleteRating(parseInt(req.params.id, 10));
  res.status(204).send();
};
