const input = document.querySelector(".my-input")
input.addEventListener("input", () => {
    if (input.value.startsWith("хуй") && input.value.includes("1")) {
        input.value = "долбоеб"
        console.log()
    }
    input.addEventListener('keydown', function (event) {
        if (event.key === "Enter" && input.value.startsWith("хуй") && input.value.includes("1")) {
            input.value = "долбоеб"
        }
    })
})
