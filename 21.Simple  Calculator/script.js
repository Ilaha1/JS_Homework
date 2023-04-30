const display = document.querySelector("#inputCalc");
const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const additionBtn = document.querySelector(".additionBtn");
const substractBtn = document.querySelector(".substractBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const divisionBtn = document.querySelector(".divisionBtn");
const resetBtn = document.querySelector(".resetBtn");
let inputCalcValue;




additionBtn.addEventListener("click", function () {
    inputCalcValue = +value1.value + +value2.value;
    display.innerText = inputCalcValue;
    if (value1.value == "" || value2.value == "") {
        alert('Enter a number')
    }
}
);

substractBtn.addEventListener("click", function () {
    inputCalcValue = +value1.value - +value2.value;
    display.innerText = inputCalcValue;
    if (value1.value == "" || value2.value == "") {
        alert('Enter a number')
    }
}
);
multiplyBtn.addEventListener("click", function () {
    inputCalcValue = +value1.value * +value2.value;
    display.innerText = inputCalcValue;
    if (value1.value == "" || value2.value == "") {
        alert('Enter a number')
    }
}
);

divisionBtn.addEventListener("click", function () {
    inputCalcValue = +value1.value / +value2.value;
    display.innerText = inputCalcValue;
    if (value1.value == "" || value2.value == "") {
        alert('Enter a number')
    }
}
);



resetBtn.addEventListener("click", function () {
    value1.value = "";
    value2.value = "";
    display.innerText = "0";
})