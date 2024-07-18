"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const eventSchema_1 = __importDefault(require("../schemas/eventSchema"));
const eventService_1 = require("../services/eventService");
const errorFormatter_1 = require("../utils/errorFormatter"); // Import the error formatting function
class EventController {
    static addEvent(req, res) {
        try {
            const { error } = eventSchema_1.default.validate(req.body);
            if (error) {
                const formattedErrors = (0, errorFormatter_1.formatValidationErrors)(error);
                return res.status(400).json({ success: false, message: 'Validation error', errors: formattedErrors });
            }
            const event = req.body;
            const newEvent = eventService_1.EventService.addEvent(event);
            return res.status(201).json({ success: true, message: 'Event created successfully', data: newEvent });
        }
        catch (error) {
            console.error('Error adding event:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }
    static getEventById(req, res) {
        try {
            const eventId = req.params.id;
            console.log({ eventId });
            const event = eventService_1.EventService.getEventById(eventId);
            if (!event) {
                return res.status(404).json({ success: false, message: 'Event not found' });
            }
            return res.status(200).json({ success: true, message: 'Event retrieved successfully', data: event });
        }
        catch (error) {
            console.error('Error retrieving event:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }
    static updateEvent(req, res) {
        try {
            const eventId = req.params.id; // Retrieve event ID from request parameters
            const updatedEvent = req.body;
            // Call EventService method to update event by ID
            const event = eventService_1.EventService.updateEvent(eventId, updatedEvent);
            if (!event) {
                return res.status(404).json({ success: false, message: 'Event not found' });
            }
            return res.status(200).json({ success: true, message: 'Event updated successfully', data: event });
        }
        catch (error) {
            console.error('Error updating event:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }
    static deleteEvent(req, res) {
        try {
            const eventId = req.params.id;
            const deletedEvent = eventService_1.EventService.deleteEventById(eventId);
            if (!deletedEvent) {
                return res.status(404).json({ success: false, message: 'Event not found' });
            }
            return res.status(200).json({ success: true, message: 'Event deleted successfully', data: deletedEvent });
        }
        catch (error) {
            console.error('Error deleting event:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }
    static listEvents(req, res) {
        try {
            // Extract query parameters for optional filtering
            const { eventName, organizer } = req.query;
            // Call EventService method to fetch events with optional filters
            const events = eventService_1.EventService.listEvents(eventName, organizer);
            return res.status(200).json({ success: true, message: 'Events retrieved successfully', data: events });
        }
        catch (error) {
            console.error('Error fetching events:', error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }
}
exports.EventController = EventController;
