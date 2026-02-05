const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    const boxColor = event.target.id;
    document.body.style.backgroundColor = boxColor;
  });
});
