import { Router } from 'express';
import { EventController } from '../controllers/eventController';

const router = Router();

router.post('/', EventController.addEvent);


router.get('/:id', EventController.getEventById);


router.put('/:id', EventController.updateEvent);

router.delete('/:id', EventController.deleteEvent);

router.get('/', EventController.listEvents);

export default router;