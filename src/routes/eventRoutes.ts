import { Router } from 'express';
import { EventController } from '../controllers/eventController';

const router = Router();

router.post('/', EventController.addEvent);

export default router;