const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300;
    const y = Math.random() * 200;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    message.style.display = "block";
    createHearts();
});

function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💜";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 25 + 15) + "px";
        heart.style.bottom = "-20px";
        heart.style.animation = "floatUp 4s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-800px); opacity: 0; }
}`;
document.head.appendChild(style);
