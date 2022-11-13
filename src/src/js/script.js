var mobileMenuIcon = document.getElementById("mobile-menu-icon");
var menu = domcument.getElementById("main-menu")

if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener("click", function () {
        menu.classList.toggle("opened");
        mobileMenuIcon.classList.toggle("opened");
    });
}