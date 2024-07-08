import { Request, Response } from 'express';
import eventSchema from '../schemas/eventSchema';
import { EventService } from '../services/eventService';
import { formatValidationErrors } from '../utils/errorFormatter'; // Import the error formatting function
import { ApiResponse } from '../interfaces/ApiResponse';


export class EventController {
    static addEvent(req: Request, res: Response): Response<ApiResponse<Event>> {
        try {
            const { error } = eventSchema.validate(req.body);
            if (error) {
                const formattedErrors = formatValidationErrors(error);
                return res.status(400).json({ success: false, message: 'Validation error', errors: formattedErrors });
            }

            const event = req.body;
            const newEvent = EventService.addEvent(event);
            return res.status(201).json({ success: true, message: 'Event created successfully', data: newEvent });
        } catch (error) {
            console.error('Error adding event:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }


    static getEventById(req: Request, res: Response): Response<ApiResponse<Event>> {
        try {
            const eventId = req.params.id; 
            console.log({eventId})
            const event = EventService.getEventById(eventId);

            if (!event) {
                return res.status(404).json({ success: false, message: 'Event not found' });
            }

            return res.status(200).json({ success: true, message: 'Event retrieved successfully', data: event });
        } catch (error) {
            console.error('Error retrieving event:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }

}
