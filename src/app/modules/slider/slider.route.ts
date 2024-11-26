import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SliderItemValidation } from './slider.validation';
import { SliderItemController } from './slider.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(SliderItemValidation.createSliderZodSchema),
  SliderItemController.createSliderItem,
);

router.get('/', SliderItemController.getSliderItems);

// update slider
router.patch(
  '/:id',
  validateRequest(SliderItemValidation.createSliderZodSchema),
  SliderItemController.updateSliderItem,
);

// delete slider
router.delete('/:id', SliderItemController.removeSliderItem)

export const SliderRoutes = router;