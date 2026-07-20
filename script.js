const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function flipUpdate(id, newValue) {

    const element = document.getElementById(id);

    if (element.textContent !== newValue) {

        element.classList.remove("flip");

        void element.offsetWidth;

        element.textContent = newValue;

        element.classList.add("flip");
    }
}

function updateClock() {

    const now = new Date();

    let hour = now.getHours();
    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    const hours = String(hour).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    flipUpdate("hours", hours);
    flipUpdate("minutes", minutes);
    flipUpdate("seconds", seconds);

    document.getElementById("ampm").textContent = ampm;

    document.getElementById("day").textContent =
        days[now.getDay()];

    document.getElementById("date").textContent =
        `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

updateClock();

setInterval(updateClock, 1000);