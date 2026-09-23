/* =========================================
   CINEMATIC BIRTHDAY ANIMATION
========================================= */


/* =========================================
   PARTICLES
========================================= */

const particles =
    document.getElementById("particles");


for (let i = 0; i < 90; i++) {

    const p =
        document.createElement("div");

    p.className = "particle";

    p.style.left =
        Math.random() * 100 + "vw";

    p.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    p.style.animationDelay =
        Math.random() * 10 + "s";

    const size =
        2 + Math.random() * 4;

    p.style.width =
        size + "px";

    p.style.height =
        size + "px";

    particles.appendChild(p);
}


/* =========================================
   CONFETTI
========================================= */

const confetti =
    document.getElementById("confetti");


function createConfetti() {

    const c =
        document.createElement("div");

    c.className = "confetti";


    c.style.left =
        Math.random() * 100 + "vw";


    c.style.background =
        `hsl(
            ${Math.random() * 360},
            100%,
            65%
        )`;


    c.style.width =
        (5 + Math.random() * 7) + "px";


    c.style.height =
        (8 + Math.random() * 14) + "px";


    c.style.animationDuration =
        (3 + Math.random() * 4) + "s";


    c.style.transform =
        `rotate(
            ${Math.random() * 360}deg
        )`;


    confetti.appendChild(c);


    setTimeout(() => {

        c.remove();

    }, 8000);
}


/* =========================================
   BIG OPENING CELEBRATION
========================================= */

setTimeout(() => {

    for (let i = 0; i < 100; i++) {

        setTimeout(() => {

            createConfetti();

        }, i * 35);
    }

}, 3500);


/* =========================================
   CONTINUOUS CONFETTI
========================================= */

setInterval(() => {

    for (let i = 0; i < 4; i++) {

        createConfetti();

    }

}, 900);


/* =========================================
   CLICK / TOUCH CELEBRATION
========================================= */

function celebration() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createConfetti();

        }, i * 20);

    }
}


document.addEventListener(
    "click",
    celebration
);


document.addEventListener(
    "touchstart",
    celebration
);


/* =========================================
   PHOTO EXTRA EFFECT
========================================= */

const photo =
    document.querySelector(".photo-frame");


if (photo) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (window.innerWidth / 2 -
                event.clientX) / 35;

            const y =
                (window.innerHeight / 2 -
                event.clientY) / 35;


            photo.style.transform =
                `translateY(0)
                 rotateY(${x}deg)
                 rotateX(${y}deg)`;
        }
    );


    document.addEventListener(
        "mouseleave",
        () => {

            photo.style.transform =
                "translateY(0) rotateY(0) rotateX(0)";
        }
    );
}


/* =========================================
   REPLAY INTRO WHEN PAGE LOADS
========================================= */

window.addEventListener(
    "load",
    () => {

        window.scrollTo(0, 0);

    }
);
