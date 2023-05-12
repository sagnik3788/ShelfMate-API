# ShelfMate-API

<p>This is a simple RESTful API for managing a book directory, built with Node.js and Express.js.</p>

<h2>Getting Started</h2>
<p>To get started, follow the instructions below.</p>

<h3>Prerequisites</h3>
<p>Before running the application, you will need to have the following installed:</p>

<ul>
  <li>Node.js (version 12 or later)</li>
  <li>npm (the Node.js package manager)</li>
</ul>

<h3>Installing</h3>
<p>Clone this repository to your local machine:</p>

<pre><code>git clone https://github.com/your-username/book-directory-api.git</code></pre>

<p>Install the dependencies:</p>

<pre><code>cd book-directory-api
npm install</code></pre>

<h2>Usage</h2>
<p>To start the application, run the following command:</p>

<pre><code>npm start</code></pre>

<p>The API will be available at http://localhost:3000.</p>

<h2>Endpoints</h2>
<p>The following endpoints are available:</p>

<ul>
  <li><code>GET /books</code> - Returns a list of all books.</li>
  <li><code>GET /books/:id</code> - Returns the book with the specified ID.</li>
  <li><code>POST /books</code> - Creates a new book.</li>
  <li><code>PUT /books/:id</code> - Updates the book with the specified ID.</li>
  <li><code>DELETE /books/:id</code> - Deletes the book with the specified ID.</li>
</ul>

<h3>Examples</h3>
<p>Example requests and responses:</p>

<h4>GET /books</h4>
<p>Returns a list of all books.</p>

<h5>Example response:</h5>

<pre><code>{
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
</code></pre>

<h4>GET /books/:id</h4>
<p>Returns the book with the specified ID.</p>

<h5>Example response:</h5>

<pre><code>{
  "id": 1,
  "title": "Attack on Titan",
  "genre": "Action, Dark Fantasy",
  "releaseYear": 2013,
  "rating": 9
}</code></pre>

<h4>POST /books</h4>
<p>Creates a new book.</p>

<h5>Example request body:</h5>

<pre><code>{
  "title": "Harry Potter and the Philosopher's Stone",
  "genre": "Fantasy",
  "releaseYear": 1997,
  "rating": 8.6
}</code></pre>

<h5>Example response:</h5>

<pre><code>{
  "id": 8,
  "title": "Harry Potter and the Philosopher's Stone",
  "genre": "Fantasy",
  "releaseYear": 1997,
  "rating": 8.6
}</code></pre>

<!DOCTYPE html>
<html>
  <head>
    <title>Delete Book API</title>
  </head>
  <body>
    <h1>Delete /books/:id API</h1>
    <p>Deletes the book with the specified ID.</p>
    <h2>Example Response:</h2>
    <pre>
      <code>
        {
          "message": "Book deleted successfully"
        }
      </code>
    </pre>
    <h2>Built With:</h2>
    <ul>
      <li>Node.js</li>
      <li>Express.js</li>
    </ul>
  </body>
</html>













