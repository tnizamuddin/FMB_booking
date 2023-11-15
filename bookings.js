// Fetch booked events data from the server and display on the page
fetch('http://localhost:3000/getBookedEvents')
    .then(response => response.json())
    .then(data => {
        const bookedEventsContainer = document.getElementById('bookedEvents');

        if (data.length > 0) {
            data.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.innerHTML = `<p>Event ${event.eventId}: ${event.name}, ${event.phone}</p>`;
                bookedEventsContainer.appendChild(eventDiv);
            });
        } else {
            bookedEventsContainer.innerHTML = '<p>No booked events yet.</p>';
        }
    })
    .catch(error => console.error('Error:', error));
