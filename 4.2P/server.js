const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// Connect MongoDB
mongoose.connect("mongodb://karanDeakin:Wahla%40150602@cluster0-shard-00-00.cwy7u.mongodb.net:27017,cluster0-shard-00-01.cwy7u.mongodb.net:27017,cluster0-shard-00-02.cwy7u.mongodb.net:27017/notesDB?ssl=true&replicaSet=atlas-s2x9sv-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Simple schema
const Note = mongoose.model("Note", {
  title: String,
  content: String
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});