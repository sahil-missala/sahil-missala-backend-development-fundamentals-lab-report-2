const express = require('express')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()

app.use(express.json())

let db = null

const initializeDBAndServer = async () => {
  db = await open({
    filename: 'books.db',
    driver: sqlite3.Database,
  })

  app.listen(3000)
}

initializeDBAndServer()

app.get('/books', async (request, response) => {
  const quer = `SELECT * FROM books`
  const outp = await db.all(quer)

  response.send(outp)
})

app.get('/books/:bookId', async (request, response) => {
  const {bookId} = request.params

  const quer = `SELECT * FROM books WHERE book_id = ?`
  const outp = await db.get(quer, [bookId])

  response.send(outp)
})

app.post('/books', async (request, response) => {
  const jbody = request.body
  const {title, author, price, pages} = jbody

  const quer = `INSERT INTO books (title, author, price, pages)
                VALUES (?, ?, ?, ?)`

  const outp = await db.run(quer, [title, author, price, pages])

  response.send('Book Added to Database')
})

app.put('/books/:bookId', async (request, response) => {
  const {bookId} = request.params
  const jbody = request.body
  const {title, author, price, pages} = jbody

  const quer = `UPDATE books
                SET title = ?, author = ?, price = ?, pages = ?
                WHERE book_id = ?`

  const outp = await db.run(quer, [
    title,
    author,
    price,
    pages,
    bookId,
  ])

  response.send('Book Details Updated')
})

app.delete('/books/:bookId', async (request, response) => {
  const {bookId} = request.params

  const quer = `DELETE FROM books WHERE book_id = ?`
  const outp = await db.run(quer, [bookId])

  response.send('Book removed')
})
