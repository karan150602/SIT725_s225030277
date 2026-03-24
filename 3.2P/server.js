const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const recipes = [
    {
        name: "Pasta",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
        desc: "Creamy Italian pasta"
    },
    {
        name: "Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        desc: "Juicy cheese burger"
    },
    {
        name: "Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        desc: "Hot veg pizza"
    }
];

// API
app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});