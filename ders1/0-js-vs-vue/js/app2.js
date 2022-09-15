const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
  //   alert(todoText.value);
  const listItem = document.createElement("li");
  listItem.textContent = todoText.value;
  document.getElementById("todoText").focus();
  document.getElementById("todoText").value = "";
  todoList.append(listItem);
});
