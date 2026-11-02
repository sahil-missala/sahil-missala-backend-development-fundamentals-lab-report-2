# Lab 2 — SQLite Database and CRUD Routes

**Student:** Sahil Missala  
**Section:** CSE QE 2B  
**Lab:** 2

## Aim

To connect an Express.js application to an SQLite database and implement REST API routes to perform CRUD operations on book records.

## Requirements

- Node.js and npm
- Express.js
- SQLite
- `sqlite` and `sqlite3` packages
- Hoppscotch (for testing API requests)
- Code editor (Zed)

## Project Structure

```text
Lab 2/
├── books.db
├── server.js
├── package.json
├── package-lock.json
├── node_modules/
├── screenshots/
│   ├── Screenshot 2026-11-02 145848.png
│   ├── Screenshot 2026-11-02 145903.png
│   ├── Screenshot 2026-11-02 150136.png
│   ├── Screenshot 2026-11-02 150213.png
│   └── Screenshot 2026-11-02 150236(2).png
└── README.md
```

## Database

The application uses the SQLite database file `books.db`. The `books` table contains the following columns:

| Column | Description |
|---|---|
| `book_id` | Unique ID for each book (primary key) |
| `title` | Book title |
| `author` | Book author |
| `price` | Book price |
| `pages` | Number of pages |

## REST API Endpoints

The Express server listens on port `3000` and provides the following routes:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Retrieves all books |
| GET | `/books/:bookId` | Retrieves a book using its ID |
| POST | `/books` | Adds a new book to the database |
| PUT | `/books/:bookId` | Updates the details of a book by ID |
| DELETE | `/books/:bookId` | Deletes a book by ID |

### GET — Retrieve all books

Request:

```http
GET http://localhost:3000/books
```

The endpoint returns all rows from the `books` table as JSON.

![GET all books tested in Hoppscotch](screenshots/Screenshot%202026-11-02%20145848.png)

### GET — Retrieve a book by ID

Request example:

```http
GET http://localhost:3000/books/1
```

The `bookId` path parameter identifies the book to retrieve.

![GET book by ID tested in Hoppscotch](screenshots/Screenshot%202026-11-02%20145903.png)

### POST — Add a book

Request:

```http
POST http://localhost:3000/books
Content-Type: application/json
```

Example JSON body:

```json
{
  "title": "Harry Potter",
  "author": "J.K. Rowling",
  "price": 500,
  "pages": 350
}
```

The endpoint inserts the submitted book data into the database.

![POST add book tested in Hoppscotch](screenshots/Screenshot%202026-11-02%20150136.png)

### PUT — Update a book

Request example:

```http
PUT http://localhost:3000/books/1
Content-Type: application/json
```

Example JSON body:

```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "price": 400,
  "pages": 310
}
```

The endpoint updates the title, author, price, and pages for the specified book ID.

![PUT update book tested in Hoppscotch](screenshots/Screenshot%202026-11-02%20150213.png)

### DELETE — Remove a book

Request example:

```http
DELETE http://localhost:3000/books/1
```

The endpoint deletes the record matching the specified book ID.

![DELETE book tested in Hoppscotch](screenshots/Screenshot%202026-11-02%20150236%282%29.png)

## Implementation Notes

- Express middleware `express.json()` is used to read JSON request bodies.
- The application opens the SQLite database using the `sqlite` package with `sqlite3` as the database driver.
- SQL statements use placeholders (`?`) and parameter values to pass route parameters and request data.
- Hoppscotch was used to test the GET, POST, PUT, and DELETE endpoints. The screenshots above show the request and response results.

## How to Run

1. Open a terminal in the Lab 2 project folder.
2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Ensure `books.db` exists and contains the `books` table.
4. Start the server:

   ```bash
   node server.js
   ```

5. Send requests using Hoppscotch at `http://localhost:3000` with the endpoints listed above.

## AI Usage Declaration

AI was used to prepare and format this `README.md` file. The code implementation, execution, and API testing were completed by me.
