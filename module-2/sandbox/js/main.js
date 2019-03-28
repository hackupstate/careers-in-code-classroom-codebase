//console.log("loaded!");
var menuBtn = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');
var overlay = document.getElementById('overlay');

menuBtn.addEventListener("click", function() {
	overlay.classList.add("active");
}); // click end
closeBtn.addEventListener("click", function() {
	overlay.classList.remove("active");
}); // click end