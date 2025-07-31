function filterMenu(category) {
  const items = document.querySelectorAll(".item");
  items.forEach(item => {
    const match = item.dataset.category === category || category === "All";
    item.style.display = match ? "block" : "none";
  });
}

document.getElementById("reserve-form").addEventListener("submit", function(e) {
  e.preventDefault();
  this.style.display = "none";
  document.getElementById("confirmation").style.display = "block";
});
