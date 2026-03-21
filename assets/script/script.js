const userInput = document.querySelector(".user-input")
const textArray = document.querySelector(".text-array")
const clickBtn = document.querySelector(".click-operator")
const array = []
const arrayString = array


userInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        if (userInput.value !== "") {
            array.push(userInput.value)
            userInput.value = ""
        }
    }
})

clickBtn.addEventListener("click", () => {
    let arrayList = ""
    array.forEach((list, index) => {
        if (index === array.length - 1) {
            arrayList += list + "?"
        }
        else {
            arrayList += list + ","
        }
    })
    textArray.textContent = arrayList
})