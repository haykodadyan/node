import { Router } from 'express';
import { getMovies, getMovie, addMovie, editMovie, removeMovie } from '../controllers/movieController';
import { getGenres, getGenre, addGenre, editGenre, removeGenre } from '../controllers/genreController';
import { getRatings, getRating, addRating, editRating, removeRating } from '../controllers/ratingController';
import { getActors, getActor, addActor, editActor, removeActor } from '../controllers/actorController';
import { getDirectors, getDirector, addDirector, editDirector, removeDirector } from '../controllers/directorController';

const router = Router();

router.get('/directors', getDirectors);
router.get('/directors/:id', getDirector);
router.post('/directors', addDirector);
router.put('/directors/:id', editDirector);
router.delete('/directors/:id', removeDirector);

router.get('/actors', getActors);
router.get('/actors/:id', getActor);
router.post('/actors', addActor);
router.put('/actors/:id', editActor);
router.delete('/actors/:id', removeActor);

router.get('/movies', getMovies);
router.get('/movies/:id', getMovie);
router.post('/movies', addMovie);
router.put('/movies/:id', editMovie);
router.delete('/movies/:id', removeMovie);

router.get('/genres', getGenres);
router.get('/genres/:id', getGenre);
router.post('/genres', addGenre);
router.put('/genres/:id', editGenre);
router.delete('/genres/:id', removeGenre);

router.get('/ratings', getRatings);
router.get('/ratings/:id', getRating);
router.post('/ratings', addRating);
router.put('/ratings/:id', editRating);
router.delete('/ratings/:id', removeRating);

export default router;
