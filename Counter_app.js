let colours = ["green", "red", "blue", "purple", "darkcyan", "brown", "chocolate", "black"];
let colourNum = 0
document.getElementById("countNum").innerHTML = "0";
function addOne() {
    document.getElementById("countNum").innerHTML = parseInt(document.getElementById("countNum").innerHTML) + 1;
    checker()
}
function resetNum() {
    document.getElementById("countNum").innerHTML = "0";
    checker()
}
function subtractOne() {
    document.getElementById("countNum").innerHTML = parseInt(document.getElementById("countNum").innerHTML) - 1;
    checker()
}
function checker() {
    if (parseInt(document.getElementById("countNum").innerHTML) > 0) {
        document.getElementById("countNum").style.color = "green";
    } else if (parseInt(document.getElementById("countNum").innerHTML) < 0) {
        document.getElementById("countNum").style.color = "red";
    } else {
        document.getElementById("countNum").style.color = "black";
    }
}
function colourFun() {
    document.getElementById("title").style.color = colours[colourNum];
    if (colourNum == 7) {
        colourNum = -1
    }
    colourNum = colourNum + 1
}