const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// Open the modal function

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

// Close the Modal function

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

// Modals are also closed when you click outside of the modal container or on the body of the webpage. To do that, add an eventListener to close the modal when you click on the overlay.

overlay.addEventListener("click", closeModal);

// If we want to close the modal using the escape or esc button from keyboard

document.addEventListener("keydown", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
