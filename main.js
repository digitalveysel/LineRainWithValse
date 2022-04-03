function rain() {
  const amount = 100;
  const body = document.querySelector("body");
  let i = 0;

  while (i < amount) {
    let drop = document.createElement("span");
    let size = Math.random() * 5;
    let positionX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -50;
    let duration = Math.random() * 5;

    drop.style.width = 0.2 + size + "px";
    drop.style.left = positionX + "px";
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = 1 + duration + "s";

    body.appendChild(drop);
    i++;
  }
}

let isPlaying = false;
function toggleValse() {
  const valseAudio = document.querySelector("audio#valse");
  if (!valse) return;

  if (!isPlaying) {
    valseAudio.play();
    isPlaying = true;
    return;
  }

  valseAudio.pause();
  isPlaying = false;
}

rain();

const logoElement = document.querySelector("#logo");
logoElement.addEventListener("click", toggleValse);
