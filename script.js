/* =====================================
   PREMIUM BIRTHDAY ANIMATION
   ===================================== */


/* Particles */

const particlesContainer =
    document.getElementById("particles");


function createParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    const size =
        Math.random() * 5 + 2;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        Math.random() * 5 + 4 + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particlesContainer.appendChild(
        particle
    );
}


for (let i = 0; i < 70; i++) {

    createParticle();

}


/* =====================================
   CONFETTI
   ===================================== */

const confettiContainer =
    document.getElementById("confetti");


function createConfetti() {

    const piece =
        document.createElement("div");

    piece.className =
        "confetti-piece";


    const colors = [
        "#ffd700",
        "#ff3b81",
        "#00e5ff",
        "#7cff00",
        "#ffffff",
        "#ff8c00"
    ];


    piece.style.background =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    piece.style.left =
        Math.random() * 100 + "%";


    piece.style.width =
        Math.random() * 8 + 5 + "px";


    piece.style.height =
        Math.random() * 12 + 8 + "px";


    piece.style.animationDuration =
        Math.random() * 5 + 4 + "s";


    piece.style.animationDelay =
        Math.random() * 6 + "s";


    confettiContainer.appendChild(
        piece
    );
}


for (let i = 0; i < 50; i++) {

    createConfetti();

}


/* =====================================
   CLICK EFFECT
   ===================================== */

document.addEventListener(
    "click",
    function(event) {

        createBurst(
            event.clientX,
            event.clientY
        );

    }
);


function createBurst(x, y) {

    for (let i = 0; i < 15; i++) {

        const spark =
            document.createElement("div");

        spark.style.position =
            "fixed";

        spark.style.left =
            x + "px";

        spark.style.top =
            y + "px";

        spark.style.width =
            "6px";

        spark.style.height =
            "6px";

        spark.style.borderRadius =
            "50%";

        spark.style.background =
            "#ffd700";

        spark.style.boxShadow =
            "0 0 12px #ffd700";

        spark.style.pointerEvents =
            "none";

        spark.style.zIndex =
            "100";

        document.body.appendChild(
            spark
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() * 120 + 40;


        const endX =
            Math.cos(angle) *
            distance;


        const endY =
            Math.sin(angle) *
            distance;


        spark.animate(
            [
                {
                    transform:
                        "translate(0,0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${endX}px, ${endY}px)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    900,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );


        setTimeout(
            () => spark.remove(),
            950
        );
    }
}


/* =====================================
   PAGE LOAD BURST
   ===================================== */

window.addEventListener(
    "load",
    function() {

        setTimeout(
            function() {

                const centerX =
                    window.innerWidth / 2;

                const centerY =
                    window.innerHeight / 2;

                createBurst(
                    centerX,
                    centerY
                );

            },
            2500
        );

    }
);