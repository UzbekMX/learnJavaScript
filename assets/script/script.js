const inputValueOne = document.querySelector(".value1")
const inputValueTwo = document.querySelector(".value2")

const btnSum = document.querySelector(".calc-btn")

let operation = "+"
let sum = undefined
let result = document.querySelector(".result")

const operationElement = document.querySelector(".operator")
operation = operationElement.value
operationElement.addEventListener("change", () => {
    operation = operationElement.value
})

inputValueTwo.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        operationsFunc()
    }
})

btnSum.addEventListener("click", () => {
    operationsFunc()
})

function displayResult(sum) {
    result.value = sum
}

function operationsFunc() {
    switch (operation) {
        case "+":
            sum = parseInt(inputValueOne.value) + parseInt(inputValueTwo.value)
            displayResult(sum)
            break
        case "-":
            sum = parseInt(inputValueOne.value) - parseInt(inputValueTwo.value)
            displayResult(sum)
            break
        case "*":
            sum = parseInt(inputValueOne.value) * parseInt(inputValueTwo.value)
            displayResult(sum)
            break
        case "/":
            if (parseInt(inputValueTwo.value) === 0) {
                result.value = "Иди нахуй,Долбоеб"
                break
            }
            sum = parseInt(inputValueOne.value) / parseInt(inputValueTwo.value)
            displayResult(sum)
            break
        default:
            displayResult("Не выбранна операция")
            break
    }
}











