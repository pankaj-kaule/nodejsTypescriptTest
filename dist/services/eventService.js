"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const uuid_1 = require("uuid");
class EventService {
    static addEvent(eventData) {
        const event = Object.assign(Object.assign({}, eventData), { id: (0, uuid_1.v4)(), createdAt: new Date(), updatedAt: new Date() });
        this.events.push(event);
        return event;
    }
    static getEventById(eventId) {
        // Replace with actual data fetching logic (e.g., database query)
        const event = this.events.find(event => event.id === eventId);
        return event;
    }
    static updateEvent(eventId, updatedEvent) {
        const index = this.events.findIndex(event => event.id === eventId);
        if (index !== -1) {
            this.events[index] = Object.assign(Object.assign({}, updatedEvent), { id: eventId });
            return this.events[index];
        }
        return null;
    }
    static deleteEventById(eventId) {
        const index = this.events.findIndex(event => event.id === eventId);
        if (index !== -1) {
            const deletedEvent = this.events.splice(index, 1)[0];
            return deletedEvent;
        }
        return null;
    }
    static listEvents(eventName, organizer) {
        let filteredEvents = this.events;
        if (eventName) {
            filteredEvents = filteredEvents.filter(event => event.eventName.toLowerCase().includes(eventName.toLowerCase()));
        }
        if (organizer) {
            filteredEvents = filteredEvents.filter(event => event.organizer.toLowerCase().includes(organizer.toLowerCase()));
        }
        return filteredEvents;
    }
}
exports.EventService = EventService;
EventService.events = [];
