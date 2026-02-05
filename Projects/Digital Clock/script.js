const clock = document.querySelector(".clock-container");

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
