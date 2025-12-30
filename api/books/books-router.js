const express = require('express');
const router = express.Router();
const books = require('./books-model');


const { checkBookPayload, validateBookId } = require('./books-middleware');


router.get('/', (req, res) => {
    res.json(books);
});


router.post('/', checkBookPayload, (req, res) => {
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
});


router.put('/:id', validateBookId, checkBookPayload, (req, res) => {
    const book = req.book; 
    book.name = req.body.name;
    book.writer = req.body.writer;
    res.json(book);
});


router.delete('/:id', validateBookId, (req, res) => {
    const book = req.book; 
    const index = books.indexOf(book); 
    books.splice(index, 1);
    res.json({ message: "Book deleted" });
});

module.exports = router;