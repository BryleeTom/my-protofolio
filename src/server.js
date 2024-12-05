// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample Route: Home
app.get('/', (req, res) => {
    res.send('Welcome to Muhammad Asrin\'s Website!');
});

// Sample Route: About
app.get('/about', (req, res) => {
    res.json({
        name: 'Muhammad Asrin',
        description: 'A passionate developer.'
    });
});

// Example API Route (GET)
app.get('/api/data', (req, res) => {
    res.json({
        message: 'This is some data from the backend.',
        timestamp: new Date()
    });
});

// Example API Route (POST)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here, you could save the data to a database or send it via email
    res.status(200).json({
        success: true,
        message: 'Contact message received!',
        data: { name, email, message }
    });
});

// 404 Route (For unmatched routes)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
