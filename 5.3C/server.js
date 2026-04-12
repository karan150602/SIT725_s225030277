const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const booksRoutes = require("./routes/books.routes");

const app = express();
const PORT = 3000;

// Hardcoded localhost MongoDB URI as required
const MONGO_URI = "mongodb://127.0.0.1:27017/booksdb";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/books", booksRoutes);
app.use("/api/integrity-check42", require("./routes/books.routes").integrityRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });