
const express = require('express');
const app = express();
const PORT = 3000;

const events = [
    { title: 'Event 1', start: '2024-06-01' },
    { title: 'Event 2', start: '2024-06-07' },
    { title: 'Event 3', start: '2024-06-15' },
    { title: 'Special Event', start: '2024-07-05' }  // New event on July 5th
];

app.use(express.static('public'));

app.get('/api/events', (req, res) => {
    res.json(events);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
