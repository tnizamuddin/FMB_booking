document.addEventListener('DOMContentLoaded', function () {
    const eventList = document.getElementById('eventList');

    // Sample event data
    const events = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'];

    // Populate the event list
    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = event;

        const bookButton = document.createElement('button');
        bookButton.textContent = 'Book';
        bookButton.addEventListener('click', function () {
            // Remove the booked event from the list
            eventList.removeChild(listItem);

            // Show the name input field
            const nameInput = document.getElementById('nameInput');
            const bookBtn = document.getElementById('bookBtn');
            nameInput.style.display = 'block';
            bookBtn.dataset.event = event; // Save the event name in the button dataset
        });

        listItem.appendChild(bookButton);
        eventList.appendChild(listItem);
    });

    // Add event listener for the 'Book' button after it's dynamically created
    document.getElementById('bookBtn').addEventListener('click', function () {
        // Get the entered name
        const name = document.getElementById('name').value;

        // Get the booked event from the button dataset
        const bookedEvent = this.dataset.event;

        // Send email notification
        sendEmailNotification(name, bookedEvent);

        // Hide the name input field
        const nameInput = document.getElementById('nameInput');
        nameInput.style.display = 'none';
    });

    function sendEmailNotification(name, bookedEvent) {
        // Replace these placeholders with your Email.js Service ID, User ID, and Template ID
        const emailjsParams = {
            serviceId: 'your_service_id',
            userId: 'your_user_id',
            templateId: 'your_template_id',
        };

        emailjs.send(emailjsParams.serviceId, emailjsParams.templateId, {
            eventName: bookedEvent,
            attendeeName: name,
        }, emailjsParams.userId)
            .then(function (response) {
                console.log('Email sent successfully:', response);
            }, function (error) {
                console.error('Email send failed:', error);
            });
    }
});
