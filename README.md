🔗 URL Shortener Backend (Node.js + Prisma)

A backend service that allows users to generate short URLs and redirect them to the original long URLs.
Built using Node.js, Express, Prisma ORM, and MySQL, and deployed on Railway.

🌐 Live Application:
https://url-shortner-prisma-production.up.railway.app/

🚀 Features

Generate short URLs for long links

Redirect short URLs to the original URL

Persist URL mappings using MySQL

RESTful API design

Production-ready deployment on Railway

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MySQL

ORM: Prisma

Deployment: Railway

Version Control: Git & GitHub

📂 Project Structure
├── prisma/
│   └── schema.prisma
├── controllers/
├── services/
├── routes/
├── app.js
├── package.json
└── README.md

⚙️ Environment Variables

The application uses the following environment variable:

DATABASE_URL=mysql://user:password@host:port/database


In production, this variable is securely managed using Railway environment variables.

🧪 API Endpoints
🔹 Create Short URL

POST

/shorten


Request Body

{
  "url": "https://example.com"
}


Response

{
  "shortUrl": "https://url-shortner-prisma-production.up.railway.app/abc123"
}

🔹 Redirect to Original URL

GET

/:shortCode


Redirects the user to the original long URL associated with the short code.

🌐 Deployment Details

The application is deployed on Railway.

Deployment highlights:

Uses process.env.PORT for dynamic port binding

Prisma Client is generated during build

Database schema is synchronized using prisma db push

MySQL database hosted and managed via Railway

🔒 Data Visibility Note

In the current version:

URLs are stored globally

Recently created URLs may be visible to all users

This design keeps the project simple and focused on backend fundamentals.
The architecture is extensible and can be enhanced with authentication to scope URLs per user.

🧠 Future Improvements

Add user authentication (JWT / sessions)

Restrict URL visibility per user

Add rate limiting and validation

Add analytics (click count, expiration)

Build a frontend interface

👨‍💻 Author

Jignesh Pampaniya
GitHub: https://github.com/JIGNESH1409
