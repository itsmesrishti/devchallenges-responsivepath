document.getElementById("open-menu").onclick = function() {
    // open menu
    document.getElementById("mobile-menu-list").style.left = 0;
    document.getElementById("mobile-menu-list").style.bottom = 0;
    document.getElementById("close-icon-container").style.display = "flex";
    document.body.style.overflowY = 'hidden';

    // close menu
    document.getElementById("close-menu").onclick = function() {
        document.getElementById("mobile-menu-list").style.left = -1000 + 'px';
        document.getElementById("close-icon-container").style.display = "none";
        document.body.style.overflowY = 'visible';
    }
}