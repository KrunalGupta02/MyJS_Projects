//  The variable slideIndex is set to 1, which is the first slide in the slideshow. The function plusSlides() takes an argument n and adds it to the current slideIndex, then calls showSlides() with the new slideIndex as an argument. The function currentSlide() takes an argument n and sets the slideIndex to that number, then calls showSlides() with the new slideIndex as an argument.

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

// This is for down img
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  // console.log(slides.length); -> 6

  // last img jab right click  karega
  if (n > slides.length) {
    slideIndex = 1;
  }

  // first img for left click karega
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// It then checks if n is greater than the total number of slides, and if it is, it sets the slideIndex to 1. It also checks if n is less than 1, and if it is, it sets the slideIndex to the total number of slides. After that, it loops through all the slides and sets their display property to none. It then loops through all the dots and replaces their active class with an empty string. Finally, it sets the display property of the slide at index slideIndex-1 to block and adds an active class to its corresponding dot. It also updates captionText with alt text of that dot.
