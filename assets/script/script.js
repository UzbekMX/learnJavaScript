const inputOne = document.getElementsByClassName("value1")
const inputTwo = document.getElementsByClassName("value2")
const value = parseInt(inputOne[0].value) + parseInt(inputTwo[0].value)

let operation = undefined
let sum = undefined
let result = document.querySelector(".result")

const operationElement = document.querySelector(".operator")
operationElement.addEventListener("change", () => {
    operation = operationElement.value
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!')

    }
})
const inputValueOne = document.querySelector(".value1")
inputValueOne.addEventListener('input', (event) => {
    "numberOne", event.target.valueAsNumber
})

const inputValueTwo = document.querySelector(".value2")
inputValueTwo.addEventListener("click", (event) => {
    "numberTwo", event.target.valueAsNumber
})


let plus = document.querySelector(".plus")
plus.addEventListener("click", function () {
    operation = "+"
})

let minus = document.querySelector(".minus")
minus.addEventListener("click", function () {
    operation = "-"
})

let multiply = document.querySelector(".multiply")
multiply.addEventListener("click", function () {
    operation = "*"
})

let divide = document.querySelector(".divide")
divide.addEventListener("click", function () {
    operation = "/"
})

const btnSum = document.querySelector(".calc-btn")
btnSum.addEventListener("click", () => {
    switch (operation) {
        case "+":
            sum = parseInt(inputValueOne.value) + parseInt(inputValueTwo.value)
            result.value = sum
            break
        case "-":
            sum = parseInt(inputValueOne.value) - parseInt(inputValueTwo.value)
            result.value = sum
            break
        case "*":
            sum = parseInt(inputValueOne.value) * parseInt(inputValueTwo.value)
            result.value = sum
            break
        case "+":
            sum = parseInt(inputValueOne.value) / parseInt(inputValueTwo.value)
            result.value = sum
            break
        default:
            result.value = "Не выбранна операция"
            break
    }
})












