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
        musicButton.textContent = "⏸ Pauziraj pjesmu";
    } else {
        music.pause();
        musicButton.textContent = "▶ Nastavi ♡";
    }

});
/* =========================================
   STICK FIGURE LOVE ANIMATION
   ========================================= */

const personLeft = document.getElementById("person-left");
const personRight = document.getElementById("person-right");
const animationHeart = document.getElementById("animation-heart");


function wait(milliseconds) {

    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });

}


async function playLoveAnimation() {

    while (true) {

        /* -----------------------------
           1. START WALKING
           ----------------------------- */

        personLeft.classList.add("walking");
        personRight.classList.add("walking");


        /* Desktop positions */

        if (window.innerWidth > 600) {

            personLeft.style.left = "190px";
            personRight.style.left = "260px";

        }

        /* Phone positions */

        else {

            personLeft.style.left = "115px";
            personRight.style.left = "185px";

        }


        /* Takes 2 seconds to walk */

        await wait(2000);



        /* -----------------------------
           2. STOP WALKING
           ----------------------------- */

        personLeft.classList.remove("walking");
        personRight.classList.remove("walking");


        /* They stand there for one second */

        await wait(1000);



        /* -----------------------------
           3. HOLD HANDS
           ----------------------------- */

        personLeft.classList.add("holding");
        personRight.classList.add("holding");


        /* Give arms time to move together */

        await wait(700);



        /* -----------------------------
           4. HEART APPEARS
           ----------------------------- */

        animationHeart.classList.add("show");


        /* Stay together for 3 seconds */

        await wait(3000);



        /* -----------------------------
           5. HEART DISAPPEARS
           ----------------------------- */

        animationHeart.classList.remove("show");

        await wait(500);



        /* -----------------------------
           6. LET GO
           ----------------------------- */

        personLeft.classList.remove("holding");
        personRight.classList.remove("holding");

        await wait(500);



        /* -----------------------------
           7. RESET
           ----------------------------- */

        personLeft.style.transition = "none";
        personRight.style.transition = "none";


        if (window.innerWidth > 600) {

            personLeft.style.left = "20px";
            personRight.style.left = "430px";

        }

        else {

            personLeft.style.left = "10px";
            personRight.style.left = "290px";

        }


        /*
        Give the browser a moment to move them back
        without showing the movement.
        */

        await wait(100);


        /* Turn movement animation back on */

        personLeft.style.transition = "left 2s ease";
        personRight.style.transition = "left 2s ease";


        /* Wait before starting again */

        await wait(1200);

    }

}


playLoveAnimation();