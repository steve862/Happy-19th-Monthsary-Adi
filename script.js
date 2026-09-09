const title = document.getElementById("content");
const openLetter = document.getElementById("openLetter");
const letterContent = document.querySelector(".letterContent");
const video = document.querySelector(".bg-video");
const paperSound = document.getElementById("paperSound");
const muteBtn = document.getElementById("muteBtn");
const letterAudio = document.getElementById("letterAudio");
const text =
`Being with you has always been my choice, but giving up was never my option. In every mistake I made, you were there, as if you were my only best friend and family who cared that I exist in a way that I was accepted. In every obstacle in life, no matter how far you were, you were there for me, patiently guiding me to be a better understanding and righteous person who values peace of mind over a crowded head. If love is a choice, loving you was never a question. 


When I'm with you, I feel safe and confident, because with you, only true love still exists. Even though I couldn't reach your hands, kiss your lips, and hug you every time I want, in my heart you always exist; in my dreams I always think of our future, and in my thoughts I always think of you like there is no tomorrow. No matter how far you are, my heart has always been closer to you.

Distance wasn't our choice, but loving you isn't my reason to question myself. Giving up on you was never my word, because love isn't built on certainty, for it's built on the choice to have faith and trust, even when we're far apart. `;
let index = 0;

function getDelay(char) {
    if (char === "." || char === "!" || char === "?") return 600;
    if (char === ",") return 250;
    if (char === " ") return 40;
    return 50;
}
function typeText() {
    if (index < text.length) {
        const char = text[index];
        title.innerHTML += char;
        index++;
        title.scrollTop = title.scrollHeight;
        setTimeout(typeText, getDelay(char));
    }
}
openLetter.addEventListener("click", () => {
    openLetter.classList.add("opening");
    video.classList.add("blur");
    paperSound.currentTime = 0;
    paperSound.play();
    setTimeout(() => {
        openLetter.style.display = "none";
        letterContent.style.display = "block";
        letterAudio.volume = 0.7;
        letterAudio.play();
        muteBtn.style.display = "block";
        title.innerHTML = "";
        index = 0;
        typeText();
    }, 1000);
});
let isMuted = false;
muteBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    letterAudio.muted = isMuted;
    muteBtn.textContent = isMuted ? "🔇" : "🔊";
});