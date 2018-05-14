var header;
var sticky;

window.onload = function () {
   window.onscroll = debounce(stickyFunction,100);
}

function stickyFunction() {
    var defaultTopScroll = 20;
    header = document.querySelector(".menu-container");
    headerContent = document.querySelector("header .content");
    sticky = header.offsetTop;
    
    if (window.pageYOffset >= defaultTopScroll) {
        header.classList.add("sticky");
        headerContent.classList.add('top-menu-padding');
    } else {
        header.classList.remove("sticky");
        headerContent.classList.remove('top-menu-padding');
    }
}

function debounce(func, time) {
    var timer = null;
    return function (...args) {
        var onTimerEnd = () => {
            func.apply(this, args);
            timer = null;
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(onTimerEnd, time);
    };
}
