var a = 0;

const widthDisplay = () => {
    window.innerWidth >= 480 ? document.getElementById("visibility").style.display = 'grid' :
        document.getElementById("visibility").style.display = 'flex';
}

function show_hide() {
    if (a == 1) {
        document.getElementById("visibility").style.display = 'none';
        document.getElementById("js_button").innerText = 'Read more';
        return a = 0;
    } else {
        widthDisplay();
        document.getElementById("js_button").innerText = 'Read less';
        return a = 1;
    }
}