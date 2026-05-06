# MERN Think Board

A full-stack MERN notes app with a React frontend and Express/MongoDB backend.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, DaisyUI, Axios
- Backend: Node.js, Express, Mongoose
- Database: MongoDB

## Project Structure

```text
mern-think-borad/
|- backend/
|  |- src/
|  |- package.json
|- frontend/
|  |- src/
|  |- package.json
|- README.md
```

## Prerequisites

- Node.js 18+
- npm
- MongoDB connection string (Atlas or local MongoDB)

## Environment Setup

Create `backend/.env`:

```env
DATABASE_URL=<your_mongodb_connection_string>
PORT=5000
NODE_ENV=development
```

Notes:
- The backend code reads `DATABASE_URL` (not `DATABASE_URI`).
- `PORT` is optional; backend defaults to `5000`.

## Install Dependencies

Install for backend:

```bash
cd backend
npm install
```

Install for frontend:

```bash
cd ../frontend
npm install
```

## Run the App (Development)

Start backend:

```bash
cd backend
npm run dev
```

Start frontend in another terminal:

```bash
cd frontend
npm run dev
```

- Backend default URL: `http://localhost:5000`
- Frontend default URL: `http://localhost:5173`

## Important Port Note

`frontend/src/shared/lib/apiClient.js` currently uses:

```js
baseURL: "http://localhost:5001/api"
```

But backend defaults to port `5000`.

Choose one setup:

1. Change backend `PORT` to `5001` in `backend/.env`, or
2. Update frontend `baseURL` to `http://localhost:5000/api`.

## API Endpoints

Base path: `/api/notes`

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get note by ID
- `POST /api/notes` - Create a note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Production

Backend:

```bash
cd backend
npm start
```

Frontend build:

```bash
cd frontend
npm run build
npm run preview
```
