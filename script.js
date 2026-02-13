const text = "Be mine forever? 💕";
const typeTarget = document.getElementById("typeText");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typeTarget.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();


const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

function moveNo() {
    noBtn.style.left = Math.random() * 200 + "px";
    noBtn.style.top = Math.random() * 60 + "px";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

yesBtn.addEventListener("click", () => {
    message.style.display = "block";
    petals();
});


function petals() {
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.innerHTML = "🌸";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (Math.random() * 3 + 4) + "s";
        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 6000);
    }
}
