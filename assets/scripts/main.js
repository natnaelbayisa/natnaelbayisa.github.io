const dropdown = document.getElementById("dd");
const menuIcon = document.querySelector(".menuIcon");
let menuExpanded = false;

!menuExpanded && (dropdown.style.display = "none");

function openLink(link) {
    console.log(link);
    window.location = link;
}

function toggleMenu() {
    if (menuExpanded) {
        dropdown.style.display = "none";
        menuExpanded = false;
        menuIcon.innerHTML = "|||";
    } else {
        dropdown.style.display = "flex";
        menuExpanded = true;
        menuIcon.innerHTML = "x";
    }
}