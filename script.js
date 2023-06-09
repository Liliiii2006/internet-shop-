// var page = document.querySelector(".body");
// var themeButton = document.querySelector(".themeButton");
// themeButton.onclick = function() {
// page.classList.toggle("lightTheme");
// page.classList.toggle("darkTheme");
// };

$(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
    });
});