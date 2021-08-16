const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEle = document.querySelector("#output");


function calculateArea() {
    const area = 0.5 * sides[0].value * sides[1].value;
    outputEle.innerText = "The area of triangle " + area + "cm²";
}

areaBtn.addEventListener('click', calculateArea);