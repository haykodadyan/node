import { Request, Response } from 'express';
import { getAllDirectors, getDirectorById, createDirector, updateDirector, deleteDirector } from '../services/directorService';

export const getDirectors = async (req: Request, res: Response) => {
  try {
    const directors = await getAllDirectors();
    res.status(200).json(directors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching directors', error });
  }
};

export const getDirector = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const director = await getDirectorById(Number(id));
    if (!director) {
      return res.status(404).json({ message: 'Director not found' });
    }
    res.status(200).json(director);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching director', error });
  }
};

export const addDirector = async (req: Request, res: Response) => {
  const { name, nationality, dob } = req.body;

  try {
    const newDirector = await createDirector({ Name: name, Nationality: nationality, DOB: dob });
    res.status(201).json(newDirector);
  } catch (error) {
    res.status(500).json({ message: 'Error creating director', error });
  }
};

export const editDirector = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, nationality, dob } = req.body;

  try {
    const updatedDirector = await updateDirector(Number(id), { Name: name, Nationality: nationality, DOB: dob });
    if (!updatedDirector) {
      return res.status(404).json({ message: 'Director not found' });
    }
    res.status(200).json(updatedDirector);
  } catch (error) {
    res.status(500).json({ message: 'Error updating director', error });
  }
};

export const removeDirector = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const director = await getDirectorById(Number(id));
    if (!director) {
      return res.status(404).json({ message: 'Director not found' });
    }

    await deleteDirector(Number(id));
    res.status(200).json({ message: 'Director deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting director', error });
  }
};
