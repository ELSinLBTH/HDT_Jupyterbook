// reset_links.js
window.onload = function () {
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = '#0000FF'; // Force all links to be blue
    }
};
