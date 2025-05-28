/* script.js */
const countdown = document.getElementById("countdown");
const dailyQuote = document.getElementById("dailyQuote");

function updateCountdown() {
  const birthday = new Date("2025-06-11T00:00:00");
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    window.location.href = "surprise.html";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

async function loadQuote() {
  const res = await fetch("assets/current-quote.json?v=" + new Date().getTime());
  const data = await res.json();
  dailyQuote.textContent = data.quote;
}


setInterval(updateCountdown, 1000);
updateCountdown();
loadQuote();
