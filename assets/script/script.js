const inputOne = document.getElementsByClassName("value1")
const inputTwo = document.getElementsByClassName("value2")
const value = parseInt(inputOne[0].value) + parseInt(inputTwo[0].value)

const inputValueOne = document.querySelector(".value1")
inputValueOne.addEventListener('input', (event) => {
    console.log("numberOne", event.target.valueAsNumber)
})

const inputValueTwo = document.querySelector(".value2")
inputValueTwo.addEventListener('input', (event) => {
    console.log("numberTwo", event.target.valueAsNumber)
})

let btnSum = document.querySelector(".calc-btn")
btnSum.addEventListener("click", () => {
    result.value = plus
})

let plus = document.querySelector(".btn-plus")
plus.addEventListener("click", function () {
    plus = parseInt(inputValueOne.value) + parseInt(inputValueTwo.value)
    console.log(result.value = plus)
})

let minus = document.querySelector(".btn-minus")
minus.addEventListener("click", function () {
    minus = parseInt(inputValueOne.value) - parseInt(inputValueTwo.value)
    console.log(result.value = minus)
})

let multiply = document.querySelector(".btn-multiply")
multiply.addEventListener("click", function () {
    multiply = parseInt(inputValueOne.value) * parseInt(inputValueTwo.value)
    console.log(result.value = multiply)
})

let divide = document.querySelector(".btn-divide")
divide.addEventListener("click", function () {
    divide = parseInt(inputValueOne.value) / parseInt(inputValueTwo.value)
    console.log(result.value = divide)
})

const result = document.querySelector(".result")



