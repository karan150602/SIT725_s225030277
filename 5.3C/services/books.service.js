const Book = require("../models/book.model");

const formatBook = (book) => ({
  id: book.id,
  title: book.title,
  author: book.author,
  year: book.year,
  genre: book.genre,
  summary: book.summary,
  price: parseFloat(book.price.toString())
});

const getAllBooks = async () => {
  const books = await Book.find({});
  return books.map(formatBook);
};

const getBookById = async (id) => {
  const book = await Book.findOne({ id });
  return book ? formatBook(book) : null;
};

module.exports = {
  getAllBooks,
  getBookById
};