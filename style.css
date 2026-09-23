* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    min-height: 100%;
}

body {
    min-height: 100vh;
    font-family: "Noto Sans Gujarati", "Arial", sans-serif;
    overflow-x: hidden;
    color: white;

    background:
        radial-gradient(circle at top, #273b80 0%, #101a45 35%, #050817 75%, #02030b 100%);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 15px;
}

/* ---------------- BACKGROUND ---------------- */

.background {
    position: fixed;
    inset: 0;
    overflow: hidden;
    z-index: -2;
}

.background span {
    position: absolute;
    display: block;
    border-radius: 50%;
    background: rgba(0, 238, 255, 0.15);
    box-shadow:
        0 0 20px rgba(0, 238, 255, 0.4),
        0 0 50px rgba(0, 238, 255, 0.2);

    animation: float 8s infinite ease-in-out;
}

.background span:nth-child(1) {
    width: 120px;
    height: 120px;
    left: 5%;
    top: 10%;
}

.background span:nth-child(2) {
    width: 70px;
    height: 70px;
    right: 10%;
    top: 20%;
    animation-delay: 1s;
}

.background span:nth-child(3) {
    width: 180px;
    height: 180px;
    left: 15%;
    bottom: 5%;
    animation-delay: 2s;
}

.background span:nth-child(4) {
    width: 90px;
    height: 90px;
    right: 15%;
    bottom: 10%;
    animation-delay: 3s;
}

.background span:nth-child(5) {
    width: 50px;
    height: 50px;
    left: 45%;
    top: 5%;
    animation-delay: 1.5s;
}

.background span:nth-child(6) {
    width: 100px;
    height: 100px;
    right: 40%;
    bottom: 5%;
    animation-delay: 2.5s;
}

.background span:nth-child(7) {
    width: 60px;
    height: 60px;
    left: 30%;
    top: 45%;
    animation-delay: 4s;
}

.background span:nth-child(8) {
    width: 130px;
    height: 130px;
    right: 5%;
    top: 55%;
    animation-delay: 3.5s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-35px) scale(1.15);
    }
}

/* ---------------- CARD ---------------- */

.card {
    width: min(680px, 100%);
    position: relative;

    padding: 45px 25px 35px;

    text-align: center;

    background:
        linear-gradient(
            145deg,
            rgba(23, 39, 94, 0.94),
            rgba(5, 10, 35, 0.97)
        );

    border: 2px solid rgba(0, 229, 255, 0.65);

    border-radius: 30px;

    box-shadow:
        0 0 25px rgba(0, 229, 255, 0.25),
        0 0 80px rgba(0, 100, 255, 0.15),
        inset 0 0 35px rgba(0, 229, 255, 0.05);

    overflow: hidden;

    animation: cardIn 1.2s ease forwards;
}

@keyframes cardIn {
    from {
        opacity: 0;
        transform: scale(0.75) translateY(50px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.top-glow {
    position: absolute;
    width: 300px;
    height: 100px;

    left: 50%;
    top: -50px;

    transform: translateX(-50%);

    background: #00eaff;

    filter: blur(70px);

    opacity: 0.5;
}

/* ---------------- TITLE ---------------- */

.small-title {
    font-size: 14px;
    letter-spacing: 5px;
    color: #65f5ff;
    margin-bottom: 15px;

    animation: glowText 2s infinite alternate;
}

@keyframes glowText {
    from {
        text-shadow: 0 0 5px #00eaff;
    }

    to {
        text-shadow:
            0 0 10px #00eaff,
            0 0 25px #00eaff;
    }
}

h1 {
    font-size: clamp(30px, 7vw, 55px);
    line-height: 1.2;
    margin-bottom: 25px;

    text-shadow:
        0 0 10px rgba(255, 255, 255, 0.4);
}

h1 span {
    display: block;

    margin-top: 8px;

    background: linear-gradient(
        90deg,
        #00eaff,
        #ffffff,
        #00eaff
    );

    background-size: 200% auto;

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;

    animation: shine 3s linear infinite;
}

@keyframes shine {
    to {
        background-position: 200% center;
    }
}

/* ---------------- PHOTO ---------------- */

.photo-box {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 20px auto 25px;
}

.photo-ring {
    width: 250px;
    height: 250px;

    padding: 8px;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            #00eaff,
            #ffffff,
            #00eaff,
            #4267ff
        );

    box-shadow:
        0 0 20px #00eaff,
        0 0 50px rgba(0, 234, 255, 0.55);

    animation:
        photoGlow 2.5s infinite alternate,
        photoFloat 4s ease-in-out infinite;
}

.photo-ring img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    object-position: center;

    border-radius: 50%;

    border: 5px solid #08102d;

    background: #111a38;
}

@keyframes photoGlow {
    from {
        box-shadow:
            0 0 15px #00eaff,
            0 0 30px rgba(0, 234, 255, 0.3);
    }

    to {
        box-shadow:
            0 0 25px #00eaff,
            0 0 70px rgba(0, 234, 255, 0.65);
    }
}

@keyframes photoFloat {
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

/* ---------------- NAME ---------------- */

h2 {
    font-size: clamp(24px, 5vw, 38px);
    line-height: 1.5;

    margin-bottom: 8px;

    color: white;

    text-shadow:
        0 0 12px rgba(0, 234, 255, 0.5);
}

h2 strong {
    color: #00eaff;
}

/* ---------------- CAKE ---------------- */

.cake {
    font-size: 55px;

    margin: 8px 0;

    animation:
        cakeBounce 1.4s infinite,
        cakeGlow 2s infinite alternate;
}

@keyframes cakeBounce {
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }
}

@keyframes cakeGlow {
    from {
        filter: drop-shadow(0 0 3px #fff);
    }

    to {
        filter: drop-shadow(0 0 18px #00eaff);
    }
}

/* ---------------- WISH ---------------- */

.wish {
    font-size: clamp(17px, 4vw, 22px);
    line-height: 1.8;

    margin-top: 10px;

    color: #ffffff;
}

.wish2 {
    font-size: 16px;
    line-height: 1.7;

    margin-top: 8px;

    color: #b9eaff;
}

/* ---------------- HAPPY BIRTHDAY ---------------- */

.birthday-text {
    margin-top: 25px;

    font-family: Arial, sans-serif;

    font-size: clamp(25px, 7vw, 48px);

    font-weight: 900;

    letter-spacing: 5px;

    color: #ffffff;

    text-shadow:
        0 0 8px #00eaff,
        0 0 20px #00eaff,
        0 0 40px #006eff;

    animation:
        birthdayPulse 1.5s infinite alternate;
}

@keyframes birthdayPulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.07);
    }
}

/* ---------------- HEARTS ---------------- */

.hearts {
    margin: 15px 0;

    font-size: 23px;
    letter-spacing: 8px;

    animation: heartFloat 2s infinite ease-in-out;
}

@keyframes heartFloat {
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-7px);
    }
}

/* ---------------- BUTTON ---------------- */

button {
    border: none;

    padding: 14px 25px;

    margin-top: 10px;

    border-radius: 50px;

    color: #031027;

    background: #00eaff;

    font-size: 16px;

    font-weight: bold;

    cursor: pointer;

    box-shadow:
        0 0 15px rgba(0, 234, 255, 0.7);

    transition: 0.3s;
}

button:hover {
    transform: scale(1.07);

    box-shadow:
        0 0 25px #00eaff,
        0 0 50px rgba(0, 234, 255, 0.4);
}

button:active {
    transform: scale(0.95);
}

/* ---------------- CONFETTI ---------------- */

.confetti {
    position: fixed;

    width: 10px;
    height: 18px;

    top: -30px;

    z-index: 100;

    animation: fall linear forwards;

    pointer-events: none;
}

@keyframes fall {
    0% {
        transform:
            translateY(-30px)
            rotate(0deg);
