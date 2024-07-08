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

    
}
