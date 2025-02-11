const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample API Endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Microservice API!' });
});

// Another Endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'Running', uptime: process.uptime() });
});

// Start the server
app.listen(port, () => {
    console.log(`Microservice is running on http://localhost:${port}`);
});
