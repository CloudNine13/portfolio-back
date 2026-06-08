# Portfolio Back

A backend API service for portfolio management, providing PDF document handling and email communication capabilities.

## Tech Stack

- TypeScript
- Express.js
- Nodemailer (email services)
- Joi (validation)

## Features

- PDF document processing and serving
- Email sending functionality with validation
- CORS-enabled API endpoints

## Installation

```bash
npm install
```

## Running the Application

**Development mode:**

```bash
npm run dev
```

**Production mode:**

```bash
npm run build
npm start
```

## API Endpoints

- `POST /api/pdf` - PDF document operations
- `POST /api/mail` - Send emails

## Environment Variables

Create a `.env` file with the following variables:

- `PORT` - Server port (default: 3000)
- `ENV` - Environment (dev/prod)
- Email configuration variables for Nodemailer

## Author

Igor Dzichkovskii
