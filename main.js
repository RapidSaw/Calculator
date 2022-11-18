let calcZone = document.querySelector(".wrapper")
let greenLight = document.querySelector(".light")
let button = document.querySelectorAll(".button")
let numBtn = document.querySelectorAll("#numberButton")
let operatorBtn = document.querySelectorAll("#operator")
let output = document.querySelector(".result_screen p")
let operation = document.querySelector(".operation_window")
let clearButton = document.querySelector("#clearButton")
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

//Отображение цифр на экране при нажатии кнопок
//Запись в переменные
let firstNum = '';
let secondNum = '';
let sign = '';

//math operators
operatorBtn.forEach(op => {
    op.addEventListener("click", function signOperator () {
    if ((firstNum !== "") && (secondNum !== "")) {
        result ();
    }
    sign = op.textContent
    })
})

// ввод с клавиатуры
    document.addEventListener("keydown", function (getNum) {
        let num = getNum.key
        if (num >= "0" && num <= "9" || num == ".") {
            if (sign == '' && secondNum == '') {
                firstNum += num
                output.textContent = firstNum
            }

            else if (firstNum !== '') {
                output.textContent = ''
                secondNum += num
                output.textContent = secondNum
            }
        }

        if (num == "+" || num == "-" || num == "*" || num == "/") {
            sign = num
            output.textContent = sign
        }
        operation.textContent = firstNum + sign + secondNum
        
    })

//ввод с кнопок мышью
numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", function getNumber (getNum) {
        let num = getNum.target.textContent
        if (num >= "0" && num <= "9" || num == ".") {
            if (sign == '' && secondNum == '') {
                firstNum += num
                output.textContent = firstNum
            }
            else if (firstNum !== '') {
                output.textContent = ''
                secondNum += num
                output.textContent = secondNum
            }
        }
        if (num == "+" || num == "-" || num == "*" || num == "/") {
                sign = num
                output.textContent = sign
                console.log(sign)
        }
        operation.textContent = firstNum + sign + secondNum
    
    })
})

equalButton.addEventListener("click", result)

function result () {    
    switch (sign) {
        case "+":
            res = Number(firstNum) + Number(secondNum);
            output.textContent = res;
            break;
        case "-":
            res = Number(firstNum) - Number(secondNum);
            output.textContent = res;  
            break;
        case "*":
            res = Number(firstNum) * Number(secondNum);
            output.textContent = res; 
            break;
        case "/":
            res = Number(firstNum) / Number(secondNum);
            output.textContent = res;
            break;
    }
    console.log(res)
    firstNum = res;
    secondNum = '';
    sign = '';
}

//кнопка сброса(очистки)
clearButton.addEventListener("click", function(){
    firstNum = '';
    secondNum = '';
    sign = '';
    output.textContent = 0
    operation.textContent = ''
})

//Вычисление квадратного корня
sqrtButton.addEventListener("click", function(){
    if(firstNum !== '' && secondNum == '') {
        let sqrt = Math.sqrt(firstNum);
        firstNum = sqrt;
        output.textContent = sqrt;
    }
    else if (firstNum !== '' || secondNum !== '') { 
        sqrt = Math.sqrt(secondNum);
        secondNum = sqrt;
        output.textContent = sqrt;
    }
    else {
        sqrt = Math.sqrt(res);
        res = sqrt;
        output.textContent = Math.sqrt(res);
    }
})

//Возведение в квадрат
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

//Кнопка +/-
minusButton.addEventListener("click", function(){
    let minus = ""
    if(firstNum !== '' && secondNum == '' && minus == '') {
        minus = "-"
        output.textContent = minus + firstNum;
        console.log("null:" + minus)
    }
    else if (firstNum !== '' && secondNum == '' && minus == '-') {
            minus = "" 
            output.textContent = firstNum;
        }
    firstNum = minus + firstNum;
    console.log(minus)
    })
