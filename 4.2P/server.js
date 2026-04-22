const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/NoteDataBase")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Schema
const Note = mongoose.model("Note", {
  title: String,
  content: String,
  image: String
});

// Get all notes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Add note
app.post("/notes", async (req, res) => {
  await Note.create(req.body);
  res.send("Note added successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});