// Listening events
window.addEventListener("keydown", function (e) {
  // console.log(e.keyCode); // This will show the which key is entered in the browser

  // This will print the div of sound in console and null for not present
  const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
  console.log(audio);

  if (!audio) return; // Stop the function from runnign all together

  audio.play();

  // Here we see the problem that the key is working only one time
  audio.currentTime = 0; // rewind to the start

  // Adding the playing class to the file for transition/animation
  const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
  console.log("key", key);

  key.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName != "transform") return; // Skip it if it is not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
// transitionend is special event listener which can remove the transition
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
