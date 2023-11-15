document.addEventListener('DOMContentLoaded', function () {
    const eventList = document.getElementById('eventList');

    // Generate 50 sample events
    const events = Array.from({ length: 50 }, (_, index) => `Event ${index + 1}`);

    // Populate the event list
    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = event;

        const bookButton = document.createElement('button');
        bookButton.textContent = 'Book';
        bookButton.addEventListener('click', function () {
            // Remove the booked event from the list
            eventList.removeChild(listItem);
        });

        listItem.appendChild(bookButton);
        eventList.appendChild(listItem);
    });
});
