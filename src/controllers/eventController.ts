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

    static updateEvent(req: Request, res: Response): Response<ApiResponse<Event>> {
        try {
            const eventId = req.params.id; // Retrieve event ID from request parameters
            const updatedEvent: any = req.body; 

            // Call EventService method to update event by ID
            const event = EventService.updateEvent(eventId, updatedEvent);

            if (!event) {
                return res.status(404).json({ success: false, message: 'Event not found' });
            }

            return res.status(200).json({ success: true, message: 'Event updated successfully', data: event });
        } catch (error) {
            console.error('Error updating event:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }


    static deleteEvent(req: Request, res: Response): Response<ApiResponse<Event>> {
        try {
            const eventId = req.params.id;

            const deletedEvent = EventService.deleteEventById(eventId);

            if (!deletedEvent) {
                return res.status(404).json({ success: false, message: 'Event not found' });
            }

            return res.status(200).json({ success: true, message: 'Event deleted successfully', data: deletedEvent });
        } catch (error) {
            console.error('Error deleting event:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }


    static listEvents(req: Request, res: Response): Response<ApiResponse<Event[]>> {
        try {
            // Extract query parameters for optional filtering
            const { eventName, organizer } = req.query;

            // Call EventService method to fetch events with optional filters
            const events = EventService.listEvents(eventName as string, organizer as string);

            return res.status(200).json({ success: true, message: 'Events retrieved successfully', data: events });
        } catch (error) {
            console.error('Error fetching events:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }


}
