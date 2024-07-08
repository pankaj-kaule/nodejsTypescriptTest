import { Router } from 'express';
import { EventController } from '../controllers/eventController';

const router = Router();

router.post('/', EventController.addEvent);


router.get('/:id', EventController.getEventById);

export default router;