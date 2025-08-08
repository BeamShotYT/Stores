console.log("Roblox Store Loaded!");

const discordInviteLink = "https://discord.gg/qYHAtuYqZ3";
const countApiUrl = "https://api.countapi.xyz/hit/your-unique-namespace/page-views";

// Discord redirect
document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(discordInviteLink, "_blank");
  });
});

// View counter
fetch(countApiUrl)
  .then(res => res.json())
  .then(data => {
    const viewCountElement = document.getElementById('view-count');
    viewCountElement.textContent = data.value.toLocaleString();
  })
  .catch(() => {
    document.getElementById('view-count').textContent = "Not Added Yet";
  });

// Stars background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.3 + 0.05
    });
  }
}
createStars(150);

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateStars);
}
animateStars();
