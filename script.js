const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");

const noTexts = [
  "No",
  "Are you sure? 😳",
  "Think again… 🥺",
  "Last chance 😭",
  "Okay you can’t press no 😌"
];

let noCount = 0;
let yesScale = 1;

function moveNoButton() {
  noCount = Math.min(noCount + 1, noTexts.length - 1);
  noBtn.textContent = noTexts[noCount];

  yesScale = Math.min(yesScale + 0.15, 2.2);
  yesBtn.style.transform = `scale(${yesScale})`;

  msg.textContent = "You can still choose YES 😇";

  const rect = noBtn.getBoundingClientRect();
  const margin = 10;

  const maxX = window.innerWidth  - rect.width  - margin;
  const maxY = window.innerHeight - rect.height - margin;

  const x = Math.max(margin, Math.floor(Math.random() * maxX));
  const y = Math.max(margin, Math.floor(Math.random() * maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;
  noBtn.style.zIndex = "9999";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
}, { passive: false });

// ✅ go to kids page instead of yes.html
yesBtn.addEventListener("click", () => {
  window.location.href = "kids.html";
});
