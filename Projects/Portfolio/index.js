document.querySelector(".btn").addEventListener
("click", () => setTimeout(change_button, 2000));
function change_button() {
  document.querySelector(".btn").classList.add("js_after_change_btn");
}
let arr = [1,2,3,5,4];
let sum=0;
let squares = arr.map(num => num*num);
console.log(squares);