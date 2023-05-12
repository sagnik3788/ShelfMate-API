# ShelfMate-API
This is a simple RESTful API for managing a book directory, built with Node.js and Express.js.

Getting Started
To get started, follow the instructions below.

Prerequisites
Before running the application, you will need to have the following installed:

Node.js (version 12 or later)
npm (the Node.js package manager)
Installing
Clone this repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/book-directory-api.git
Install the dependencies:
bash
Copy code
cd book-directory-api
npm install
Usage
To start the application, run the following command:

bash
Copy code
npm start
The API will be available at http://localhost:3000.

Endpoints
The following endpoints are available:

GET /books
Returns a list of all books.

Example response:

json
Copy code
[
  {
    "id": 1,
    "title": "Attack on Titan",
    "genre": "Action, Dark Fantasy",
    "releaseYear": 2013,
    "rating": 9
  },
  {
    "id": 2,
    "title": "Naruto",
    "genre": "Action, Adventure",
    "releaseYear": 2002,
    "rating": 8.3
  },
  ...
]
GET /books/:id
Returns the book with the specified ID.

Example response:

json
Copy code
{
  "id": 1,
  "title": "Attack on Titan",
  "genre": "Action, Dark Fantasy",
  "releaseYear": 2013,
  "rating": 9
}
POST /books
Creates a new book.

Example request body:

json
Copy code
{
  "title": "Harry Potter and the Philosopher's Stone",
  "genre": "Fantasy",
  "releaseYear": 1997,
  "rating": 8.6
}
Example response:

json
Copy code
{
  "id": 8,
  "title": "Harry Potter and the Philosopher's Stone",
  "genre": "Fantasy",
  "releaseYear": 1997,
  "rating": 8.6
}
PUT /books/:id
Updates the book with the specified ID.

Example request body:

json
Copy code
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "genre": "Fantasy",
  "releaseYear": 1997,
  "rating": 8.6
}
Example response:

json
Copy code
{
  "id": 8,
  "title": "Harry Potter and the Sorcerer's Stone",
  "genre": "Fantasy",
  "releaseYear": 1997,
  "rating": 8.6
}
DELETE /books/:id
Deletes the book with the specified ID.

Example response:

json
Copy code
{
  "message": "Book deleted successfully"
}
Built With
Node.js
Express.js
Authors
John Doe - johndoe
License
This project is licensed under the MIT License - see the LICENSE file for details.






