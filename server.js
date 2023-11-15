const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/confirmBooking', (req, res) => {
    const { eventId, name, phone } = req.body;

    // Append data to CSV file
    const data = `${eventId},${name},${phone}\n`;
    fs.appendFile('bookings.csv', data, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to file');
        } else {
            res.status(200).send('Booking confirmed and data saved.');
        }
    });
});

app.get('/getBookedEvents', (req, res) => {
    // Read booked events from CSV file and send as JSON
    fs.readFile('bookings.csv', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
        } else {
            const lines = data.trim().split('\n');
            const bookedEvents = lines.map(line => {
                const [eventId, name, phone] = line.split(',');
                return { eventId, name, phone };
            });
            res.json(bookedEvents);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
