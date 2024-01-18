
var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

// Set the new start date
var start = new Date(2023, 3, 15, 0, 0); // Month is zero-based (0 = January, 1 = February, ..., 11 = December)

function timer() {
    var t = new Date() - start;
    var d = Math.floor(t / 1000 / 60 / 60 / 24);

    document.getElementById("d").innerHTML = d;
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;
var ok = 0; // Assuming ok is declared somewhere in your code

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function () {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);
