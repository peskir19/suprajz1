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
    "Veoma simple samo volim te ❤️",
    "Volim te kao što Joffrey voli da bude idiot ❤️",
    "Volim te kao što volim kokice ❤️",
    "Volim te skoro koliko i ti sir (nije moguce toliko) ❤️",
    "Volim te onoliko koliko ti mrziš da se budiš ujutru ❤️",
    "Volim te onoliko koliko mrzim onog malog iz noći u muzeju ❤️",
    "Volim te i nadam se da ću imati priliku da te volim duuuuuugo ❤️",
    "Volim te onoliko koliko ti mrziš nizozemce 🤮 ❤️",
    "Volim te kao što volim kad se smijes na moje glupe fore ❤️",
    "Volim te kao što mi volimo lite poljubac ❤️",
    "Volim te najviše na svijetu ❤️"
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
const personLeft =
    document.getElementById("person-left");

const personRight =
    document.getElementById("person-right");

const animationHeart =
    document.getElementById("animation-heart");


function wait(milliseconds) {
    return new Promise(resolve =>
        setTimeout(resolve, milliseconds)
    );
}


async function playLoveAnimation() {

    while (true) {

        /* START WALKING */

        personLeft.classList.add("walking");
        personRight.classList.add("walking");


        if (window.innerWidth <= 600) {

            personLeft.style.left = "115px";
            personRight.style.left = "185px";

        } else {

            personLeft.style.left = "190px";
            personRight.style.left = "260px";

        }


        await wait(2000);



        /* STOP WALKING */

        personLeft.classList.remove("walking");
        personRight.classList.remove("walking");


        /* stand there for a second */

        await wait(1000);



        /* HOLD HANDS */

        personLeft.classList.add("holding");
        personRight.classList.add("holding");

        await wait(700);



        /* HEART APPEARS */

        animationHeart.classList.add("show");

        await wait(3000);



        /* HEART DISAPPEARS */

        animationHeart.classList.remove("show");

        await wait(500);



        /* LET GO */

        personLeft.classList.remove("holding");
        personRight.classList.remove("holding");

        await wait(400);



        /* RESET WITHOUT ANIMATION */

        personLeft.style.transition = "none";
        personRight.style.transition = "none";


        if (window.innerWidth <= 600) {

            personLeft.style.left = "10px";
            personRight.style.left = "290px";

        } else {

            personLeft.style.left = "20px";
            personRight.style.left = "430px";

        }


        await wait(100);


        /* restore walking movement */

        personLeft.style.transition = "left 2s ease";
        personRight.style.transition = "left 2s ease";


        await wait(1000);
    }
}


playLoveAnimation();

playLoveAnimation();