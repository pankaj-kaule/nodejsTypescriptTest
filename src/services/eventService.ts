import { Event } from '../models/event';
import { v4 as uuidv4 } from 'uuid';

let events: Event[] = [];

export class EventService {
    static addEvent(eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Event {
        const event: Event = {
            ...eventData,
            id: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        events.push(event);
        return event;
    }

    
}
