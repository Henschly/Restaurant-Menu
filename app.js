const buttons = document.querySelectorAll(".categories button");
const items = document.querySelectorAll(".menu-item");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    items.forEach(item => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
