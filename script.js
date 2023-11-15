let currentEventId;

function openPopup(eventId) {
    currentEventId = eventId;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

function confirmBooking() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // For simplicity, just removing the event from the list
    const eventElement = document.querySelector(`[data-id="${currentEventId}"]`);
    eventElement.remove();

    // Display the booked event on the separate page
    displayBookingDetails(currentEventId, name, phone);

    closePopup();
}

function displayBookingDetails(eventId, name, phone) {
    // Send data to server (you may want to improve this part)
    fetch('http://localhost:3000/confirmBooking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId, name, phone }),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
}
