const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const bagButton = document.getElementById("bagButton");
const bagCount = document.getElementById("bagCount");

const addButtons = document.querySelectorAll(".add-button");
const notification = document.getElementById("notification");

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

let totalBagItems = 0;

menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");

  if (mobileMenu.classList.contains("open")) {
    menuButton.textContent = "Close";
  } else {
    menuButton.textContent = "Menu";
  }
});

addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const productName = button.getAttribute("data-product");

    totalBagItems = totalBagItems + 1;
    bagCount.textContent = totalBagItems;

    showNotification(productName + " added to your bag");
  });
});

bagButton.addEventListener("click", function () {
  if (totalBagItems === 0) {
    showNotification("Your bag is currently empty");
  } else {
    showNotification(
      "You currently have " + totalBagItems + " item(s) in your bag"
    );
  }
});

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailAddress = emailInput.value;

  formMessage.textContent =
    "Thank you. Updates will be sent to " + emailAddress;

  emailInput.value = "";
});

function showNotification(message) {
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(function () {
    notification.classList.remove("show");
  }, 2500);
}
