const express = require("express");
const path = require("path");
const booksRoutes = require("./routes/books.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Use books routes
app.use("/api/books", booksRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});