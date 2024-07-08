# Event Management Platform (EMP)

This project is a basic Event Management Platform (EMP) implemented using Node.js and TypeScript. It provides APIs to perform CRUD operations (Create, Read, Update, Delete) on events, as well as listing events with optional filters.

## Features

- Add a new event
- Update an existing event
- Delete an event by ID
- Retrieve an event by ID
- List all events with optional filters (eventName, organizer)

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Joi (for input validation)

## Project Structure

The project structure follows a typical MVC (Model-View-Controller) architecture:

- **`src/`**: Contains all source code files.
  - **`controllers/`**: Controllers handling request and response logic.
  - **`interfaces/`**: Interface definitions (e.g., ApiResponse).
  - **`models/`**: Data models (e.g., Event).
  - **`routes/`**: Express routes for different endpoints.
  - **`services/`**: Business logic and data manipulation services.
  - **`utils/`**: Utility functions (e.g., error formatting).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pankaj-kaule/nodejsTypescriptTest

2. run project 
   ```bash
   npm start