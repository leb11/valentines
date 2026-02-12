const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Move No button randomly
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300;
    const y = Math.random() * 200;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// When Yes is clicked
yesBtn.addEventListener("click", () => {
    message.style.display = "block";
    createHearts();
});

// Floating hearts animation
function createHearts() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
