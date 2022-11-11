let calcZone = document.querySelector(".wrapper")
let greenLight = document.querySelector(".light")
let button = document.querySelectorAll(".button")
let numBtn = document.querySelectorAll("#numberButton")
let output = document.querySelector(".result_screen p")
let clearButton = document.querySelector("#clearButton")

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
numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", function(getNum) {
        let num = getNum.target.textContent
        firstNum += num 
        console.log(firstNum)
        output.textContent = firstNum
    })
})

clearButton.addEventListener("click", function(){
    firstNum = '';
    secondNum = '';
    sign = '';
    output.textContent = 0
})