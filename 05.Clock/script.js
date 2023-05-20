const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");

function setDate() {
  //   console.log("HI");

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; // Here we add 90 bcz we already set to 90deg in transform
  //   console.log(seconds);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const min = now.getMinutes();
  const minDegrees = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000); // This will run for every 1s

// For sound
function playMySong(url) {
  var audio = document.createElement("audio");
  audio.style.display = "none";
  audio.src = url;
  audio.autoplay = true;
  audio.onended = function () {
    playMySong("sound.mp3");
  };
  document.body.appendChild(audio);
}

playMySong("sound.mp3");
