console.log("Roblox Store Loaded!");

// Replace with your actual Discord invite link
const discordInviteLink = "https://discord.gg/qYHAtuYqZ3";

// CountAPI namespace for your website (replace 'your-unique-namespace' with a unique string, e.g., 'roblox-item-shop-123')
const countApiUrl = "https://api.countapi.xyz/hit/your-unique-namespace/page-views";

document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (discordInviteLink.includes("your-invite-link-here")) {
      alert("Please join our Discord server to purchase this item! The store owner needs to update the Discord invite link.");
    } else {
      window.open(discordInviteLink, "_blank");
    }
  });
});

// Fetch and display view count
fetch(countApiUrl)
  .then(response => response.json())
  .then(data => {
    const viewCountElement = document.getElementById('view-count');
    if (data.value) {
      viewCountElement.textContent = data.value.toLocaleString();
    } else {
      viewCountElement.textContent = "Not added yet";
    }
  })
  .catch(error => {
    console.error("Error fetching view count:", error);
    document.getElementById('view-count').textContent = "Not Added Yet";
  });