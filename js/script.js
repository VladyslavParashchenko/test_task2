var header;
var sticky;

window.onload = function () {
   window.onscroll = debounce(stickyFunction,100);
}

function stickyFunction() {
    header = document.querySelector(".menu-container");
    sticky = header.offsetTop;
    if (window.pageYOffset >= document.documentElement.clientHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
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
