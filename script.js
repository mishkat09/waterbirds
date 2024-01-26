// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var menuLinks = document.querySelectorAll('.menu-position a');

    menuLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});
