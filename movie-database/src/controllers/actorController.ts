import { Request, Response } from 'express';
import { getAllActors, getActorById, createActor, updateActor, deleteActor } from '../services/actorService';

export const getActors = async (req: Request, res: Response) => {
  const actors = await getAllActors();
  res.json(actors);
};

export const getActor = async (req: Request, res: Response) => {
  const actor = await getActorById(parseInt(req.params.id, 10));
  if (!actor) {
    return res.status(404).json({ message: 'Actor not found' });
  }
  res.json(actor);
};

export const addActor = async (req: Request, res: Response) => {
  const newActor = await createActor(req.body);
  res.status(201).json(newActor);
};

export const editActor = async (req: Request, res: Response) => {
  const updatedActor = await updateActor(parseInt(req.params.id, 10), req.body);
  if (!updatedActor) {
    return res.status(404).json({ message: 'Actor not found' });
  }
  res.json(updatedActor);
};

export const removeActor = async (req: Request, res: Response) => {
  await deleteActor(parseInt(req.params.id, 10));
  res.status(204).send();
};
