let todoList = [];

displayItems();
function addTodo() {
  let inputElement = document.querySelector("#input_box");
  let dateElement = document.querySelector("#date_box");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}
function displayItems() {

  let containerElement = document.querySelector(".todo_container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="delete_button" onclick="todoList.splice(${i}, 1);
    displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
