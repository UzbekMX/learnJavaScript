const inputOne = document.getElementsByClassName("value1")
const inputTwo = document.getElementsByClassName("value2")
const value = parseInt(inputOne[0].value) + parseInt(inputTwo[0].value)

const inputValueOne = document.querySelector(".value1")
inputValueOne.addEventListener('input', (event) => {
    "numberOne", event.target.valueAsNumber
})

const inputValueTwo = document.querySelector(".value2")
inputValueTwo.addEventListener('input', (event) => {
    "numberTwo", event.target.valueAsNumber
})

const btnSum = document.querySelector(".calc-btn")
btnSum.addEventListener("click", () => {
    result.value = sum  
    if (operation == "+"){
    }
    if(operation == "-"){
    }
    if(operation == "*"){
    }
    if(operation == "/"){
    }
})

let operation = undefined
let sum = undefined

let plus = document.querySelector(".btn-plus")
plus.addEventListener("click", function () {
    operation = "+"
    // sum = parseInt(inputValueOne.value) + parseInt(inputValueTwo.value)
})

let minus = document.querySelector(".btn-minus")
minus.addEventListener("click", function () {
    operation = "-"
    sum = parseInt(inputValueOne.value) - parseInt(inputValueTwo.value)
})

let multiply = document.querySelector(".btn-multiply")
multiply.addEventListener("click", function () {
    operation = "*"
    sum = parseInt(inputValueOne.value) * parseInt(inputValueTwo.value)
})

let divide = document.querySelector(".btn-divide")
divide.addEventListener("click", function () {
    operation = "/"
    sum = parseInt(inputValueOne.value) / parseInt(inputValueTwo.value)
})

const result = document.querySelector(".result")



