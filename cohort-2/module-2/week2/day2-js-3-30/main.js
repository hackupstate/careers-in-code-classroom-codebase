const myHeading = document.getElementById("title");
myHeading.textContent = "Coding Some Basic Javascript";

function searchFunction() {
  const result = document.getElementById("searchInput").value;
  console.log(result);
}

const form = document.getElementById("inputForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let resultText = document.getElementById("tigerInput").value;
  console.log(resultText);
});

// function photoText() {
//     let resultText = document.getElementById("tiger").value;
//     console.log(resultText);
// }
