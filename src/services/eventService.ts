import { Event } from '../models/event';
import { v4 as uuidv4 } from 'uuid';



export class EventService {

    private static events: Event[] = []; 

    static addEvent(eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Event {
        const event: Event = {
            ...eventData,
            id: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.events.push(event);
        return event;
    }





      static getEventById(eventId: string): Event | undefined {
        // Replace with actual data fetching logic (e.g., database query)
        const event = this.events.find(event => event.id === eventId);
        return event;
    }

    static updateEvent(eventId: string, updatedEvent: Event): Event | null {
        const index = this.events.findIndex(event => event.id === eventId);
        if (index !== -1) {
            this.events[index] = { ...updatedEvent, id: eventId };
            return this.events[index];
        }
        return null;
    }


    static deleteEventById(eventId: string): Event | null {
        const index = this.events.findIndex(event => event.id === eventId);
        if (index !== -1) {
            const deletedEvent = this.events.splice(index, 1)[0];
            return deletedEvent;
        }
        return null;
    }

    static listEvents(eventName?: string, organizer?: string): Event[] {
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
