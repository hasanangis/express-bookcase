const express = require('express');
const router = express.Router();
const books = require('./books-model'); 


router.get('/', (req, res) => {
    res.json(books);
});


router.post('/', (req, res) => {
    console.log("Books:", books); 
    
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook); 
    res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
   
    book.name = req.body.name;
    book.writer = req.body.writer;
    res.json(book);
});


router.delete('/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index > -1) {
        books.splice(index, 1);
        res.status(200).json({ message: "Book deleted" });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

module.exports = router;