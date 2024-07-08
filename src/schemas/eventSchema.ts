import Joi from 'joi';

const eventSchema = Joi.object({
    eventName: Joi.string().required(),
    eventDate: Joi.date().iso().required(),
    organizer: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9]+$/).required(),
    location: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        zip: Joi.string().required(),
    }).required(),
});

export default eventSchema;
