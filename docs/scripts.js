// Function expresion to select elements --- lambda
const selectElement = (s) => document.querySelector(s);

// Open menu on click
selectElement(".open").addEventListener("click", () => {
    selectElement(".nav-list").classList.add("active");
})

// Close menu on click
selectElement(".close").addEventListener("click", () => {
    selectElement(".nav-list").classList.remove("active");
})

// Detect scrolling
window.onscroll = function(e) {
    document.getElementById("top-btn").classList.add("active");
    setTimeout(function() {
        document.getElementById("top-btn").classList.remove("active");
    }, 3000);
}
