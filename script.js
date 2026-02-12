const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

// Move "No" button
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Yes button click
yesBtn.addEventListener("click", () => {
    message.style.display = "block";
    createHearts();
});

// Floating hearts
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
