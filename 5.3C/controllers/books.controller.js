const booksService = require("../services/books.service");

const getAllBooks = async (req, res) => {
  try {
    const books = await booksService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await booksService.getBookById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book" });
  }
};

module.exports = {
  getAllBooks,
  getBookById
};