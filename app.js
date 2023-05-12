const express = require('express');
const app = express();
const fs=require('fs');
//const books = require('./books'); 

let books = JSON.parse(fs.readFileSync('books.json'));

// Middleware for parsing JSON
app.use(express.json());

// Create a route for getting all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// GET endpoint to retrieve a single book by ID
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const foundBook = books.find(book => book.id === id);
  if (foundBook) {
    res.status(200).json(foundBook);
  } else {
    res.status(404).send('Book not found');
  }
});


// POST endpoint to add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  if (!newBook.id || !newBook.title || !newBook.genre ||!newBook.releaseYear ||!newBook.rating) {
    res.status(400).send('Invalid book data');
  } else {
    books.push(newBook);
    res.status(201).send('Book added successfully');
  }
});
// DELETE endpoint to delete a book by ID
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index >= 0) {
    books.splice(index, 1);
    res.status(200).send('Book deleted successfully');
  } else {
    res.status(404).send('Book not found');
  }
});
// Start server on port 
app.listen(2000, () => {
  console.log('Server listening on port 2000');
});