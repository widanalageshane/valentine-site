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
  // Update texts + make YES button bigger
  noCount = Math.min(noCount + 1, noTexts.length - 1);
  noBtn.textContent = noTexts[noCount];

  yesScale = Math.min(yesScale + 0.15, 2.2);
  yesBtn.style.transform = `scale(${yesScale})`;

  msg.textContent = "You can still choose YES 😇";

  // Move the NO button to a random spot in the viewport
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

// Desktop hover + clicks
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
}, { passive: false });

// YES action
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
