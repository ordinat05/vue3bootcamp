const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
  // alert(todoText.value);
  const listItem = document.createElement("li");
  listItem.textContent = todoText.value;
  document.getElementById("todoText").focus();
  document.getElementById("todoText").value = "";
  todoList.append(listItem);
});

var input = document.getElementById("todoText");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addBtn").click();
  }
});

listeyiSilBtn.addEventListener("click", () => {
  document.getElementById("durum").innerHTML = "";
  alert("Liste Temizlendi");
});

// function inputaFocusla() {
//   document.getElementById("todoText").focus();
// }
