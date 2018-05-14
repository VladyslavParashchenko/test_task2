var header;
var sticky;

window.onload = function () {
    window.onscroll = function () {
    stickyFunction();
};
}

function stickyFunction() {
    
    header = document.querySelector(".top-menu");
    sticky = header.offsetTop;
    if (window.pageYOffset >= document.documentElement.clientHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
