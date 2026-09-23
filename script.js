/* =========================
   FLOATING PARTICLES
========================= */

const particles = document.getElementById("particles");

for (let i = 0; i < 70; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.width =
        (2 + Math.random() * 4) + "px";

    particle.style.height =
        particle.style.width;

    particles.appendChild(particle);
}


/* =========================
   CONFETTI
========================= */

const confettiBox = document.getElementById("confetti");

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left =
        Math.random() * 100 + "vw";

    confetti.style.width =
        (5 + Math.random() * 7) + "px";

    confetti.style.height =
        (8 + Math.random() * 12) + "px";

    confetti.style.background =
        `hsl(${Math.random() * 360}, 100%, 65%)`;

    confetti.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    confetti.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    confettiBox.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 8000);
}


/* First celebration */

for (let i = 0; i < 70; i++) {

    setTimeout(() => {
        createConfetti();
    }, i * 45);
}


/* Continuous celebration */

setInterval(() => {

    for (let i = 0; i < 5; i++) {
        createConfetti();
    }

}, 700);


/* =========================
   CLICK CELEBRATION
========================= */

document.addEventListener("click", () => {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {
            createConfetti();
        }, i * 20);

    }

});
