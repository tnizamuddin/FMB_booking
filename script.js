function openBooking(eventId) {
    var bookingContainer = document.getElementById("booking-" + eventId);
    var name = prompt("Enter your Name:");
    var itsNumber = prompt("Enter your ITS Number:");

    if (name && itsNumber) {
        bookingContainer.innerHTML = "Name: " + name + "<br>ITS Number: " + itsNumber;
        bookingContainer.style.display = "block";
        var bookButton = document.getElementById(eventId).querySelector("button");
        var loginContainer = document.getElementById("login-container");
        bookButton.style.display = "none";
        loginContainer.style.display = "block";
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication here (this is a basic example)
    if (username === "admin" && password === "password") {
        showHiddenElements();
    } else {
        alert("Invalid credentials");
    }
}

function showHiddenElements() {
    var hiddenElements = document.querySelectorAll(".booking-container");
    hiddenElements.forEach(function (element) {
        element.style.display = "block";
    });

    var bookButtons = document.querySelectorAll(".event-container button");
    bookButtons.forEach(function (button) {
        button.style.display = "block";
    });

    var loginContainer = document.getElementById("login-container");
    loginContainer.style.display = "none";
}
