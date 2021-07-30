const rootId = document.getElementById("root");
console.log(rootId);

const domClass = document.getElementsByClassName("dom-class");
console.log(domClass);

const div = document.getElementsByTagName("div");
console.log(div);

const byQuerySelector = document.querySelector(".dom-class");
console.log(byQuerySelector);

const byQuerySelectorAll = document.querySelectorAll(".dom-class");
console.log(byQuerySelectorAll);

document.getElementById("root").innerHTML = "<b>hello world</b>";
document.querySelector("p").innerHTML = "<i> Hello, whats up </i>";

document.querySelectorAll(".dom-class")[1].innerHTML = "<i> Hello, whats up </i>";
document.querySelectorAll(".dom-class")[2].innerHTML = "<i> Hello, whats up </i>";


document.getElementById("root").style.fontSize = "50px";
document.getElementById("root").style.color = "aqua";
document.getElementById("root").style.border = "2px solid green";
document.getElementById("root").style.textAlign = "center";

function pngOn() {
    document.querySelector("img").src = "./image/features-3.png";
}

function pngOff() {
    document.querySelector("img").src = "./image/features-2.png";
}

function switchImg(imageName) {
    document.querySelector("img").src = "./image/features-" + imageName + ".png";
}


function toggle() {
    const imgTag = document.querySelector("img");
    if (imgTag.src.endsWith("/image/features-3.png")) {
        imgTag.src = "./image/features-2.png";
    } else {
        imgTag.src = "./image/features-3.png";
    }
}


function gallery(e) {
    let imgReview = document.getElementById('img-preview')
    imgReview.src = e.firstElementChild.src;
}

