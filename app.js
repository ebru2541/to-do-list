let buton = document.querySelector("#btn");
let input = document.getElementById("input");
let list = document.querySelector(".list");
let box = document.querySelector(".container");

let li = document.querySelector("li");

box.addEventListener("click", (e) => {
  if (input.value) {
    if (e.target.id === "btn") {
      list.innerHTML += `<li class="text">
      <i class="fa-solid fa-check-double"></i>
      <p>${input.value}</p>
      <i class="fa-regular fa-trash-can"></i>
      </li>`;
    }
  }

  if (e.target.classList.contains("fa-check-double")) {
    e.target.classList.toggle("color");
    console.log();
    console.log(e.target);
    e.target.nextElementSibling.classList.toggle("through");
  
  }

  if (e.target.classList.contains("fa-trash-can")) {
    // e.target.style.color = "red";
    e.target.parentElement.style.display = "none";
  }

  input.value = "";
});

// input.addEventListener("keydown", (e) => {
//   if (e.code === "enter") {
//     box.click()
//   }
// });
