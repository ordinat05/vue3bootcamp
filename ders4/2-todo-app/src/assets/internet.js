const div = document.getElementById("sebomOffline");
//www.youtube.com/watch?v=Af5rPmQojHk
window.addEventListener("online", () => {
  div.style.display = "none";
  console.log("selam");
});

window.addEventListener("offline", () => {
  div.style.display = "block";
  console.log("mrb");
});
