// Demo interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Dashboard Loaded ✅");

  // Example: Animate stats on load
  const stats = document.querySelectorAll(".stat-card h2");
  stats.forEach(stat => {
    let target = +stat.innerText;
    stat.innerText = "0";
    let count = 0;
    let interval = setInterval(() => {
      count += 1;
      stat.innerText = count;
      if (count >= target) clearInterval(interval);
    }, 50);
  });
});
