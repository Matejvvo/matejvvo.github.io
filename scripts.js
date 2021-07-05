// Detect scrolling
window.onscroll = function(e) {
    document.getElementById("id").classList.add("class");
    setTimeout(function() {
        document.getElementById("id").classList.remove("class");
    }, 1111);
}
