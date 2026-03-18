const express = require('express');
const app = express();
const port = 3000;

// Serve static files from public folder
app.use(express.static('public'));

// Simple GET endpoint to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send("Please provide two valid numbers using ?num1= &num2= in URL");
    }

    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

// Optional: POST endpoint for more calculations
app.use(express.json()); // to parse JSON body
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.send("Please provide valid numbers in JSON body.");
    }

    const product = num1 * num2;
    res.send(`The product of ${num1} and ${num2} is ${product}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});