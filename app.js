const toggle = document.querySelector(".switch");
const price1 = document.querySelectorAll(".price-1");
const price2 = document.querySelectorAll(".price-2");

toggle.addEventListener("click", (event) => {
  price1.forEach((price) => {
    price.classList.toggle("hidden");
  });
  price2.forEach((price) => {
    price.classList.toggle("hidden");
  });
});
