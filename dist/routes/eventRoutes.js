"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventController_1 = require("../controllers/eventController");
const router = (0, express_1.Router)();
router.post('/', eventController_1.EventController.addEvent);
router.get('/:id', eventController_1.EventController.getEventById);
router.put('/:id', eventController_1.EventController.updateEvent);
router.delete('/:id', eventController_1.EventController.deleteEvent);
router.get('/', eventController_1.EventController.listEvents);
exports.default = router;
