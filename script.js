const noBtn = document.getElementById("noBtn");
const btnRow = document.getElementById("btnRow");
const noMsg = document.getElementById("noMsg");

const messages = [
  "Wait… you sure? 😭",
  "Try again 😌",
  "No button is acting funny today…",
  "Okay okay, I’ll stop.",
  "NOT!",
  "Dont Die!"
];

let tries = 0;

noBtn?.addEventListener("click", () => {
  tries++;

  // Update message
  noMsg.textContent = messages[Math.min(tries - 1, messages.length - 1)];

  // Move the "No" button to a random position near the buttons
  const x = Math.floor(Math.random() * 180) - 90;  // -90 to 90
  const y = Math.floor(Math.random() * 120) - 60;  // -60 to 60
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // After a few tries, swap to a softer option
  if (tries >= 6) {
    noMsg.textContent = "Okay I’ll accept ‘YES’ as your final answer 😌💘";
    noBtn.textContent = "Yes (fine)";
    noBtn.classList.remove("btn-outline");
    noBtn.onclick = () => window.location.href = "yes.html";
  }
});
