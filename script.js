var a = 0;

function show_hide() {
    if (a == 1) {
        document.getElementById("visibility").style.display = 'none';
        document.getElementById("js_button").innerText = 'Read more';
        return a = 0;
    } else {
        document.getElementById("visibility").style.display = 'grid';
        document.getElementById("js_button").innerText = 'Read less';
        return a = 1;
    }
}