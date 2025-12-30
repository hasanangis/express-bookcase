const books = require("./books-model");

function checkBookPayload(req, res, next) {
    try {
        const { name, writer } = req.body;

        
        if (!name || !writer) {
            res.status(400).json({ message: "Missing required fields: name and writer" });
        } else {
            
            next();
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}
function validateBookId(req, res, next) {
    try {
        
        const book = books.find(b => b.id === parseInt(req.params.id));
        if(!book) {
            return res.status(404).json({message: "Book not found"});
            }
            req.book = book;
            next();
        } catch (error) {
            next(error);
        }
        }
    
module.exports = {
    checkBookPayload, validateBookId
};