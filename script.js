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

    // You can add code here to send details (name and phone) to the owner via email

    closePopup();
}
