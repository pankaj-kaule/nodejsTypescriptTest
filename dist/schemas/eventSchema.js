"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const eventSchema = joi_1.default.object({
    eventName: joi_1.default.string().required(),
    eventDate: joi_1.default.date().iso().required(),
    organizer: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().pattern(/^[0-9]+$/).required(),
    location: joi_1.default.object({
        street: joi_1.default.string().required(),
        city: joi_1.default.string().required(),
        state: joi_1.default.string().required(),
        zip: joi_1.default.string().required(),
    }).required(),
});
exports.default = eventSchema;
