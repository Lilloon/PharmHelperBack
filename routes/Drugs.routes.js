import Router from 'express';
import DrugsController from '../controller/Drugs.controller.js'

const router = new Router();
router.get('/allManufCountries', DrugsController.getCountries);
router.get('/:id', DrugsController.getDrugById);
router.get('/search/:name', DrugsController.getSearchList);





export default router;