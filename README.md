# CondoLink API

Node.js and Express backend API for the CondoLink platform, managing authentication, role-based access, and building data.

## Technology Stack

- Node.js  
- Express.js
- TypeScript   
- PostgreSQL database  
- Prisma ORM for database access  
- JWT for authentication and authorization  
- Middleware for CORS, logging, credentials, and error handling  
- Role-based access control with custom middleware  

## Key Features

- User registration and login with JWT authentication  
- Role-based authorization for Admin, Subscriber, Resident roles  
- RESTful API endpoints for buildings, dashboard, admin tasks, and authentication  
- Secure cookie handling for refresh tokens  
- CORS configured with custom options  
- Custom logging and error handling middleware  

## Project Structure Highlights

- `middlewares/` – custom middleware for logging, credentials, JWT verification, role checks, and error handling  
- `routes/` – separate route files for registration, authentication, buildings, dashboard, and admin  
- Public static files served from `/public`  

## Getting Started

### Prerequisites

- Node.js (version 16 or later)  
- npm or yarn  
- PostgreSQL database setup  

### Installation & Running Locally

Clone the repository:

```bash
git clone https://github.com/CondoLink/api.git
cd api
npm install
