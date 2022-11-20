let calcZone = document.querySelector(".wrapper")
let greenLight = document.querySelector(".light")
let button = document.querySelectorAll(".button")
let output = document.querySelector(".result_screen")
let operation = document.querySelector(".operation_window")
let sqrtButton = document.querySelector("#sqrtButton")
let expButton = document.querySelector("#expButton")
let minusButton = document.querySelector("#minusButton")

//Лампа активности
calcZone.addEventListener("mouseover", function(){greenLight.className="light_on"})
calcZone.addEventListener("mouseout", function(){greenLight.className="light"})

//Анимация кнопок
button.forEach(btn => {
    btn.addEventListener("mouseover", function(){btn.classList.add("buttonHover")})
    btn.addEventListener("mouseout", function(){btn.classList.remove("buttonHover")})
    btn.addEventListener("mousedown", function(){btn.classList.add("pushButton")})
    btn.addEventListener("mouseup", function(){btn.classList.remove("pushButton")})
})

let firstNum = '';
let secondNum = '';
let sign = '';
let num = '';
let res = '';

//keyboard input
document.addEventListener("keydown", function (getKey) {
    num = getKey.key
    buttonHandler()
})

//mouse input
button.forEach(button => {
    button.addEventListener("click", function (getKey) {
        num = getKey.target.textContent
        buttonHandler()
    })
})

//sqrt calculation
sqrtButton.addEventListener("click", function(){
    if(firstNum !== '' && secondNum == '') {
        let sqrt = Math.sqrt(firstNum);
        firstNum = sqrt;
        output.textContent = roundResult(sqrt);
    }
    else if (firstNum !== '' || secondNum !== '') { 
        sqrt = Math.sqrt(secondNum);
        secondNum = sqrt;
        output.textContent = roundResult(sqrt);
    }
    else {
        sqrt = Math.sqrt(res);
        res = sqrt;
        output.textContent = roundResult(Math.sqrt(res));
    }
})

//exp calculation
expButton.addEventListener("click", function(){
    if(firstNum !== '' && secondNum == '') {
        let exp = firstNum ** 2;
        firstNum = exp;
        output.textContent = exp;
    }
    else if (firstNum !== '' || secondNum !== '') {
        exp = secondNum ** 2;
        secondNum = exp;
        output.textContent = exp;
    }
    else {
        exp = res ** 2;
        res = exp;
        output.textContent = exp;
    }
})

//Change sign (+/-)
minusButton.addEventListener("click", function () {
    if (secondNum == '') {
        if (firstNum[0] !== '-') {
            firstNum = "-" + firstNum
        }
        else if (firstNum[0] == '-') {
            firstNum = firstNum.substr(1)
        }
        output.textContent = firstNum
    }
    if (secondNum !== '') {
        if (secondNum[0] !== '-') {
            secondNum = "-" + secondNum
        }
        else if (secondNum[0] == '-') {
            secondNum = firstNum.substr(1)
        }
        output.textContent = secondNum
    }

})
    
//Handler of first number? sign and second number
function buttonHandler() {
    if (num >= "0" && num <= "9" || num == ".") {
        if (sign == '' && secondNum == '') {
            firstNum += num
            output.textContent = firstNum
            checkSize(output.textContent)
        }
        else if (firstNum !== '' && sign !== '') {
            output.textContent = ''
            secondNum += num
            output.textContent = secondNum
            checkSize(output.textContent)
        }
    }
    else if (num == "+" || num == "-" || num == "*" || num == "/") {
        if (firstNum !== '' && secondNum == '') {
            sign = num
            firstNum = roundResult(firstNum)
            output.textContent = firstNum
        }
        else if (firstNum !== '' && secondNum !== '') {
            result();
            sign = num
        }
    }
    else if (num == "=" || num == "Enter") {
        result();
    }
    else if (num == "C" || num == "Backspace" || num == "Delete") {
        firstNum = '';
        secondNum = '';
        sign = '';
        output.textContent = 0
        operation.textContent = '';
        checkSize (output.textContent)
    }
    checkOperationWindow()
}

//Result calculation
function result () {    
    switch (sign) {
        case "+":
            res = Number(firstNum) + Number(secondNum);
            output.textContent = res;
            checkSize (output.textContent)
            break;
        case "-":
            res = Number(firstNum) - Number(secondNum);
            output.textContent = res;  
            checkSize (output.textContent)
            break;
        case "*":
            res = Number(firstNum) * Number(secondNum);
            output.textContent = res; 
            checkSize (output.textContent)
            break;
        case "/":
            res = Number(firstNum) / Number(secondNum);
            output.textContent = roundResult(res);
            checkSize (output.textContent)
            break;
    }
    
    firstNum = res;
    secondNum = '';
    sign = '';
}

//Check size of result window
function checkSize (x) {
    output.style.fontSize = "40px"
if (String(x).length > 7) {
        output.style.fontSize = "28px";
        if (String(x).length > 10) {
            output.style.fontSize = "20px";
            if (String(x).length > 13) {
                output.style.fontSize = "18px"
                if (String(x).length > 15) {
                    output.style.fontSize = "36px"
                    output.textContent = "Oversize";

            }
        }
    }
}
}

//Check operation window
function checkOperationWindow () {
    if (output.textContent == "Oversize" || (res !== "" && sign == '')) 
    {operation.textContent = ''}
    else if (output.textContent != "Oversize") 
    {operation.textContent = firstNum + " " + sign + " " + secondNum}
}

//Round function for div and sqrt operations
function roundResult(x) {
	return Math.round(x * 100000) / 100000;
}
