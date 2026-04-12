const express = require("express");
const booksController = require("../controllers/books.controller");

const router = express.Router();
const integrityRouter = express.Router();

// Required routes
router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);

// Required integrity check route
integrityRouter.get("/", (req, res) => {
  res.status(204).send();
});

module.exports = router;
module.exports.integrityRouter = integrityRouter;