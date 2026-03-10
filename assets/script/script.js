const userInput = document.querySelector(".user-input")
const textArray = document.querySelector(".text-array")
const array = []


userInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        if (userInput.value !== "") {
            array.push(userInput.value)
            userInput.value = ""
            const arrayString = array.join(",")
            textArray.textContent = arrayString
        }
    }
})










const arrayEach = ["перекись", "круассаны", "апельсины", "яблоко", "банан"]
let list = ""
arrayEach.forEach((string) => {
    list += string + "\n"
})


console.log(list)


