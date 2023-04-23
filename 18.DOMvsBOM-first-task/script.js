let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".stop")
let result = document.querySelector("#result")
let resetBtn = document.querySelector(".reset")
let Incerementby1Btn = document.querySelector(".Incerementby1")
let Decrementby1Btn = document.querySelector(".Decrementby1")
let IncerementByInputValueBtn=document.querySelector("#input")

startBtn.addEventListener("click", function () {
    interval = setInterval(() => {
        counter++;
        result.innerText = counter;

    }, 1000)
    this.setAttribute("disabled", "true")
    this.setAttribute("class", "test")
    stopBtn.removeAttribute("disabled")
});

let interval;
let counter = 0;

stopBtn.addEventListener("click", function () {
    clearInterval(interval);
    this.setAttribute("class", "test")
    startBtn.removeAttribute("disabled")
});

Incerementby1Btn.addEventListener("click", function () {
    interval = setInterval(() => {
        counter++;
        result.innerText = counter;
    }, 1000)
});

Decrementby1Btn.addEventListener("click", function () {
    interval = setInterval(() => {
        counter--;
        result.innerText = counter;
    }, 1000)
});


resetBtn.addEventListener("click", function () {
    result.innerText = 0;
    counter = 0;
    clearInterval(interval);

});

let value;
IncerementByInputValueBtn.addEventListener("click", function () {
    
    interval = setInterval(() => {
        inputValue=Number(document.getElementById("input").value)
        value=inputValue+counter;
        counter=value;
        result.innerText = counter;
    },1000)
});






