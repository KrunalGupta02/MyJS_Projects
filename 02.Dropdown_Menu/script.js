const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Function for toggle show class
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// stopPropagation
// Note:- This prevents the function of the button element from being passed down to the parent element, thus stopping the function from running twice.

// Closing the dropdown menu

document.documentElement.addEventListener("click", function (e) {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});
