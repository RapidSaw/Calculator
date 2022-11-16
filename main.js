let calcZone = document.querySelector(".wrapper")
let greenLight = document.querySelector(".light")
let button = document.querySelectorAll(".button")
let numBtn = document.querySelectorAll("#numberButton")
let output = document.querySelector(".result_screen p")
let clearButton = document.querySelector("#clearButton")
let sqrtButton = document.querySelector("#sqrtButton")
let expButton = document.querySelector("#expButton")
let sumButton = document.querySelector("#sumButton")
let multButton = document.querySelector("#multButton")
let divButton = document.querySelector("#divButton")

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

//сложение
sumButton.addEventListener("click", function(){
    sign = sumButton.textContent
})

//вычитание
subButton.addEventListener("click", function(){
    sign = subButton.textContent
})

//умножение
multButton.addEventListener("click", function(){
    sign = multButton.textContent
})

//деление
divButton.addEventListener("click", function(){
    sign = divButton.textContent
})

numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", function (getNum) {
        let num = getNum.target.textContent
        if (sign == '' && secondNum == '') {
            firstNum += num
            output.textContent = firstNum
        }

        else if (firstNum !== '' && sign !== '') {
            output.textContent = ''
            secondNum += num
            output.textContent = secondNum
            console.log(secondNum)
        }
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
        case "x":
            res = Number(firstNum) * Number(secondNum);
            output.textContent = res; 
            break;
        case "/":
            res = Number(firstNum) / Number(secondNum);
            output.textContent = res;
            break;
    }
    firstNum = '';
    secondNum = '';
    sign = '';
}

//кнопка сброса(очистки)
clearButton.addEventListener("click", function(){
    firstNum = '';
    secondNum = '';
    sign = '';
    output.textContent = 0
})

//Вычисление квадратного корня
sqrtButton.addEventListener("click", function(){
    if(firstNum !== '' && secondNum == '') {
        output.textContent = Math.sqrt(firstNum)
    }
    else if (firstNum !== '' || secondNum !== '') { 
        output.textContent = Math.sqrt(secondNum)
    }
    else if (res !== '') { 
        output.textContent = Math.sqrt(res)
    }
})

//Возведение в квадрат
expButton.addEventListener("click", function(){
    if(firstNum !== '' && secondNum == '') {
        output.textContent = firstNum ** 2
    }
    else if (firstNum !== '' || secondNum !== '') {
        output.textContent = secondNum ** 2
    }
    else if (res !== '') {
        output.textContent = res ** 2
    }
})