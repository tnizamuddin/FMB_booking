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

    // Display the booked event on the main page
    displayBookingDetails(currentEventId, name, phone);

    closePopup();
}

function displayBookingDetails(eventId, name, phone) {
    const detailsContainer = document.getElementById('eventDetails');
    const eventDiv = document.createElement('div');
    eventDiv.innerHTML = `<p>Event ${eventId}: ${name}, ${phone}</p>`;
    detailsContainer.appendChild(eventDiv);
}

function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication logic (replace with secure authentication)
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('eventListContainer').style.display = 'block';
    } else {
        alert('Invalid credentials. Try again.');
    }
}
