const reunionDate = new Date("2026-08-28T18:10:00");

function updateCountdown() {

    const now = new Date();

    const difference = reunionDate - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);
const messages = [
    "Message 1 ❤️",
    "Message 2 ❤️",
    "Message 3 ❤️",
    "Message 4 ❤️",
    "Message 5 ❤️",
    "Message 6 ❤️",
    "Message 7 ❤️",
    "Message 8 ❤️",
    "Message 9 ❤️",
    "Message 10 ❤️",
    "Message 11 ❤️"
];

const firstMessageDate = new Date(2026, 7, 18);

function updateDailyMessage() {

    const now = new Date();

    const today = Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const start = Date.UTC(
        firstMessageDate.getFullYear(),
        firstMessageDate.getMonth(),
        firstMessageDate.getDate()
    );

    const daysPassed = Math.floor(
        (today - start) / (1000 * 60 * 60 * 24)
    );

    document.getElementById("daily-message").textContent =
        messages[daysPassed];
}

updateDailyMessage();


function scheduleNextMidnight() {

    const now = new Date();

    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);

    const timeUntilMidnight = nextMidnight - now;

    setTimeout(() => {
        updateDailyMessage();
        scheduleNextMidnight();
    }, timeUntilMidnight);
}

scheduleNextMidnight();
const music = document.getElementById("music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", function () {

    if (music.paused) {
        music.play();
        musicButton.textContent = "⏸ Pause our song";
    } else {
        music.pause();
        musicButton.textContent = "▶ Play our song ♡";
    }

});